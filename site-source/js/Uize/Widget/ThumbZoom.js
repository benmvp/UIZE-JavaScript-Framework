/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.ThumbZoom Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2006-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*
	OPTIONAL
		- Uize.Widget.Bar.Progress.js (if overlayed progress indicator during load is desired)
*/

/* Module Meta Data
	type: Class
	importance: 2
	codeCompleteness: 100
	docCompleteness: 6
*/

/*?
	Introduction
		The =Uize.Widget.ThumbZoom= class wires up thumbnails that are linked to larger versions, so clicking them shows the larger versions with a zoom effect.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.ThumbZoom',
	required:[
		'Uize.Widget.ImagePort',
		'Uize.Widget.Drag',
		'Uize.Node',
		'Uize.Fade'
	],
	builder:function (_superclass) {
		'use strict';

		/*** Variables for Scruncher Optimization ***/
			var
				_true = true,
				_false = false,
				_Uize_Node = Uize.Node,
				_Uize_Widget = Uize.Widget
			;

		/*** General Variables ***/
			var _shield;

		return _superclass.subclass ({
			alphastructor:function () {
				var m = this;

				m.showFade = Uize.Fade ({
					duration:350,
					curve:Uize.Fade.celeration (1,0),
					quantization:1
					/*?
						Instance Properties
							showFade
								An instance of the =Uize.Fade= class.

								NOTES
								- see the related =hideFade= and =shieldFade= instance properties
					*/
				});
				m.hideFade = Uize.Fade ({
					duration:250,
					curve:Uize.Fade.celeration (0,1),
					startValue:1,
					endValue:0
					/*?
						Instance Properties
							hideFade
								An instance of the =Uize.Fade= class.

								NOTES
								- see the related =showFade= and =shieldFade= instance properties
					*/
				});
				m.shieldFade = Uize.Fade ({
					duration:3000,
					curve:Uize.Fade.celeration (1,0),
					startValue:0,
					endValue:1
					/*?
						Instance Properties
							shieldFade
								An instance of the =Uize.Fade= class.

								NOTES
								- see the related =hideFade= and =showFade= instance properties
					*/
				});
			},

			omegastructor:function () {
				var m = this;

				/*** create loading progress widget ***/
					if (m._showLoadingProgress)
						m._loadingProgress = m.addChild ('loadingProgress',_Uize_Widget.Bar.Progress)
						/*?
							Child Widgets
								loadingProgress
									An instance of the =Uize_Widget.Bar.Progress= class.
						*/
					;
			},

			instanceMethods:{
				wireUi:function () {
					var m = this;
					if (!m.isWired) {
						if (m._showLoadingProgress && !m._loadingProgress.getNode ()) {
							/* TO DO:
								- wireUi may get called after the document has loaded, so insertUi has to put the progress bar DOM into the page without using writeln
							*/
							m._loadingProgress.insertUi ();
							m._loadingProgress.setNodeStyle ('',{position:'absolute'});
						}
						var
							_thumbNode, _zoomedImageNode,
							_showFade = m.showFade,
							_hideFade = m.hideFade,
							_shieldFade = m.shieldFade,
							_prepareZoomedImageNode = function () {
								if (!_zoomedImageNode) {
									_zoomedImageNode = document.createElement ('img');
									_Uize_Node.setStyle (
										_zoomedImageNode,
										{
											display:'none',
											position:'absolute',
											zIndex:50001
										}
									);
									m.wireNode (
										_zoomedImageNode,
										'load',
										function (_event) {
											m._showLoadingProgress && m._loadingProgress.set ({inProgress:_false});
											_Uize_Node.display (_zoomedImageNode);
											_Uize_Node.setOpacity (_zoomedImageNode,1);
											var
												_coords = _Uize_Node.getCoords (_thumbNode),
												_windowDims = _Uize_Node.getDimensions (window),
												_scaledImageCoords = _Uize_Widget.ImagePort.getScaledRect ({
													portWidth:_windowDims.width,
													portHeight:_windowDims.height,
													rectWidth:_zoomedImageNode.width,
													rectHeight:_zoomedImageNode.height,
													alignX:.5,
													alignY:.5,
													sizingLowerBound:0,
													sizingUpperBound:'fit',
													sizingValue:.95,
													maxScaling:1
												}),
												_documentElement = document.documentElement
											;
											_scaledImageCoords.left += _documentElement.scrollLeft;
											_scaledImageCoords.top += _documentElement.scrollTop;

											/*** register document handlers for dismissing zoomed image ***/
												var
													_oldOnkeydown = document.onkeydown,
													_oldOnmousemove = document.onmousemove,
													_oldOnmousedown = document.onmousedown,
													_initiatingClientX = _event.clientX,
													_initiatingClientY = _event.clientY
												;
												function _dismissImage () {
													_showFade.stop ();
													document.onmousemove = _oldOnmousemove;
													document.onmousedown = _oldOnmousedown;
													document.onkeydown = _oldOnkeydown;
													_shieldFade.stop ();
													_Uize_Node.display (_shield,_false);
													_hideFade.start ();
													return _false;
												}
												document.onkeydown = document.onmousedown = _dismissImage;
												document.onmousemove = function (_event) {
													_event = _event || event;
													return (
														_event.clientX != _initiatingClientX || _event.clientY != _initiatingClientY
															? _dismissImage ()
															: _false
													);
												};

											/*** setup fade properties and initiate zoom out ***/
												function _getCoordsStyleProperties (_coords) {
													return {
														left:_coords.left,
														top:_coords.top,
														width:_coords.width,
														height:_coords.height
													};
												}
												_showFade.start ({
													startValue:_getCoordsStyleProperties (_coords),
													endValue:_getCoordsStyleProperties (_scaledImageCoords)
												});
										}
									);
									document.body.appendChild (_zoomedImageNode);
									if (!_shield)
										_shield = _Uize_Widget.Drag.insertShield ({
											zIndex:50000,
											backgroundColor:'#000'
										})
									;
									_showFade.wire ({
										'Changed.value':function (_event) {_Uize_Node.setStyle (_zoomedImageNode,_event.newValue)},
										Done:
											function () {
												_Uize_Node.setOpacity (_shield,0);
												_Uize_Node.display (_shield);
												_shieldFade.start ();
											}
									});
									_hideFade.wire ({
										'Changed.value':function (_event) {_Uize_Node.setOpacity (_zoomedImageNode,_event.newValue)},
										Done:function () {_Uize_Node.display (_zoomedImageNode,_false)}
									});
									_shieldFade.wire ({
										'Changed.value':function (_event) {_Uize_Node.setOpacity (_shield,_event.newValue)}
									});
								}
							}
						;
						/*** wire up the thumb nodes ***/
							var _handleThumbNodeClick = function () {
								_thumbNode = this;
								var
									_clickHandled = _false,
									_linkNode = _thumbNode
								;
								while (_linkNode && _linkNode.tagName != 'A')
									_linkNode = _linkNode.parentNode
								;
								if (_linkNode) {
									var _href = _linkNode.getAttribute ('href');
									if ((m._imageValidator || /./).test (_href)) {
										_prepareZoomedImageNode ();
										/* TO DO:
											if the src is the same as the zoomedImageNode, then don't wait for the load event
										*/

										/*** position progress bar and activate ***/
											if (m._showLoadingProgress) {
												var _coords = _Uize_Node.getCoords (_thumbNode);
												m._loadingProgress.setNodeStyle (
													'',
													{
														left:_coords.x + 3,
														top:_coords.y + _coords.height - 1 - m._loadingProgress.getNode ().offsetHeight - 3
													}
												);
												m._loadingProgress.set ({inProgress:_true});
											}

										/*** initiate loading of large image ***/
											_Uize_Node.setStyle (
												_zoomedImageNode,
												{width:'',height:'',left:-10000,top:-10000}
											);
											_zoomedImageNode.src = _linkNode.href;
											_clickHandled = _true;
									}
								}
								return !_clickHandled;
							};
							_Uize_Node.doForAll (
								_Uize_Node.find (m._thumbNodes),
								function (_node) {
									_node.onclick = Uize.returnFalse;
									m.wireNode (_node,'click',_handleThumbNodeClick);
								}
							);
					}
				}
			},

			stateProperties:{
				_imageValidator:{
					name:'imageValidator',
					value:/\.(jpg|jpeg|gif|png)/
					/*?
						State Properties
							imageValidator
								A regular expression.
					*/
				},
				_showLoadingProgress:{
					name:'showLoadingProgress',
					value:_false
					/*?
						State Properties
							showLoadingProgress
								A boolean.
					*/
				},
				_thumbNodes:{
					name:'thumbNodes',
					value:[]
					/*?
						State Properties
							thumbNodes
								An array.
					*/
				}
			}
		});
	}
});
