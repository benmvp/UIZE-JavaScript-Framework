/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.Dialog.xResizable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.xResizable',required:['Uize.Widget.Resizer','Uize.Node'],builder:function(_a){var _b='Uize.Widget.Dialog.xResizable.',_c=_b+'resizer',_d=_b+'resizerInitialized',_e=_b+'createResizerIfNecessary',_f=_b+'initializeResizerNodesIfNecessary';var _g=_a.prototype;_g[_e]=function(){var _h=this,_i=_h[_c];if(_h.resizable&& !_i){(_h[_c]=_i=_h.addChild('resizer',Uize.Widget.Resizer,{constrain:false,minHeight:0,minWidth:150})).wire({'Changed.inDrag':function(){_h.set({inDrag:_i.get('inDrag')})},'Drag Start':_h,'Drag Done':function(_j){_h.set({width:_i.get('width'),height:_i.get('height')});_h.fire(_j);}});function _k(){if(_h.isWired&&_h.get('shown')){var _l=_h.getNode();if(Uize.Node.getStyle(_l,'display')!='none'){var _m=Uize.Node.getCoords(_l);_i.set({left:_m.left,top:_m.top,width:_m.width,height:_m.height});}}};_h.wire({'After Show':_k,'Changed.width':_k,'Changed.height':_k,'Drag Done':_k});if(_h.isWired){_h[_f]();_h.get('shown')&&_k();_i.wireUi();}}};_g[_f]=function(){var _h=this;
if(_h.isWired&&_h.resizable&& !_h[_d]){_h[_d]=true;_h[_c].set({areaNodes:[_h.getNode()],nodeMap:{move:null,shell:document.documentElement}});}};_g.atEndOfOmegaStructor=function(){this[_e]()};_g.afterWireUi=function(){this[_f]()};_a.registerProperties({resizable:{name:'resizable',onChange:function(){var _h=this,_i=_h[_c];_h[_e]();_h[_f]();_i&&_i.set({enabled:_h.resizable?'inherit':false});}}});}});