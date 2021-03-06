/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.Share.Reddit.Widget Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015-2016 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 5
*/

/*?
	Introduction
		The =Uize.Widgets.Buttons.Share.Reddit.Widget= module implements a widget class.

		*DEVELOPERS:* `Chris van Rensburg`

		Visual Sampler
			Below is a visual sampler of the =Uize.Widgets.Buttons.Share.Reddit.Widget= class...

			............................................................
			<< widget >>

			widgetClass: Uize.Widgets.Buttons.Share.Reddit.VisualSampler
			............................................................
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.Share.Reddit.Widget',
	superclass:'Uize.Widgets.Buttons.Share.Widget',
	required:'Uize.Widgets.Buttons.Share.Reddit.Css',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			staticProperties:{
				cssModule:Uize.Widgets.Buttons.Share.Reddit.Css,
				shareVia:'Reddit'
			},

			instanceMethods:{
				getShareUrl:function (_pageInfo) {
					return [
						'http://reddit.com/submit',
						{
							title:_pageInfo.title,
							url:_pageInfo.url
						}
					];
				}
			}
		});
	}
});

