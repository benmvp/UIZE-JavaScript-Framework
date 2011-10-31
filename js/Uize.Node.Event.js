/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-23

	http://www.uize.com/reference/Uize.Node.Event.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Node.Event',builder:function(){var _a=function(_b){return _b||event};_a.abort=function(_b){_a.preventDefault(_b||(_b=event));_a.stopPropagation(_b);};_a.charCode=function(_b){_b||(_b=event);if(_b.ctrlKey||_b.altKey||_b.which<1)return 0;return'charCode'in _b?_b.charCode:_a.keyCode(_b);};_a.fix=function(_b){_b||(_b=event);_b.target=_a.target(_b);_b.relatedTarget=_a.relatedTarget(_b);_b.charCode=_a.charCode(_b);_b.keyCode=_a.keyCode(_b);_b.preventDefault||(_b.preventDefault=_c);_b.stopPropagation||(_b.stopPropagation=_d);return _b;};var _e={Backspace:8,Delete:46,Insert:45,Enter:13,Escape:27,Space:32,Tab:9,PageUp:33,PageDown:34,End:35,Home:36,LeftArrow:37,RightArrow:39,UpArrow:38,DownArrow:40};function _f(_g,_h){_a['isKey'+_g]=function(_b){return _a.keyCode(_b)==_h};}for(var _g in _e)_f(_g,_e[_g]);_a.keyCode=function(_b){return'which'in(_b||(_b=event))?_b.which:_b.keyCode;};function _c(){this.preventDefault?this.preventDefault():(this.returnValue=false);}
_a.preventDefault=function(_b){_c.call(_b||event)};_a.relatedTarget=function(_b){return('relatedTarget'in(_b||(_b=event))?_b.relatedTarget:(_b.type=='mouseout'?_b.toElement:_b.fromElement));};function _d(){this.stopPropagation?this.stopPropagation():(this.cancelBubble=true);}_a.stopPropagation=function(_b){_d.call(_b||event)};_a.target=function(_b){return(_b||(_b=event)).target||_b.srcElement;};return _a;}});