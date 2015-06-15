/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.Share.Widget Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
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
		The =Uize.Widgets.Buttons.Share.Widget= module implements a widget class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.Share.Widget',
	superclass:'Uize.Widgets.Button.Square.Icon.Widget',
	required:'Uize.Url',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			instanceMethods:{
				getShareUrl:function (_pageInfo) {
					return '';
				},

				share:function () {
					this.callInherited ('launchPopup') ({
						url:Uize.Url.resolve (this.getShareUrl (this.callInherited ('getPageInfo') ()))
					});
				}
			},

			eventBindings:{
				':Click':function () {this.share ()}
			}
		});
	}
});

