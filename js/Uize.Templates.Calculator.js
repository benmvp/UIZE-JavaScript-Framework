/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Templates.Calculator.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.Calculator',builder:function(){var _a=function(){};_a.process=function(input){var output=[];
output.push('<div id="',input.idPrefix,'" class="calculator">\r\n	<input id="',input.idPrefix,'_entry-input" type="text" class="entry"/><br/>\r\n\r\n	<div class="buttonShell operatorButton operatorButtonNegate">\r\n		<a id="',input.idPrefix,'_negate" href="javascript://" class="button" title="negate / invert sign">+/-</a>\r\n	</div>\r\n	<div class="buttonShell memoryButton memoryButtonPlus">\r\n		<a id="',input.idPrefix,'_memoryPlus" href="javascript://" class="button" title="memory plus">M+</a>\r\n	</div>\r\n	<div class="buttonShell memoryButton memoryButtonMinus">\r\n		<a id="',input.idPrefix,'_memoryMinus" href="javascript://" class="button" title="memory minus">M-</a>\r\n	</div>\r\n	<div class="buttonShell memoryButton memoryButtonRecall">\r\n		<a id="',input.idPrefix,'_memoryRecall" href="javascript://" class="button" title="mempry recall">MR</a>\r\n	</div>\r\n	<div class="buttonShell memoryButton memoryButtonClear">\r\n		<a id="',input.idPrefix,'_memoryClear" href="javascript://" class="button" title="memory clear">MC</a>\r\n	</div>\r\n	<br style="clear:left;"/>\r\n\r\n	<div class="buttonShell operatorButton operatorButtonPercent">\r\n		<a id="',input.idPrefix,'_percent" href="javascript://" class="button" title="percent">%</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton7">\r\n		<a id="',input.idPrefix,'_digit7" href="javascript://" class="button">7</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton8">\r\n		<a id="',input.idPrefix,'_digit8" href="javascript://" class="button">8</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton9">\r\n		<a id="',input.idPrefix,'_digit9" href="javascript://" class="button">9</a>\r\n	</div>\r\n	<div class="buttonShell operatorButton operatorButtonBasic operatorButtonDivide">\r\n		<a id="',input.idPrefix,'_divide" href="javascript://" class="button" title="divide">&divide;</a>\r\n	</div>\r\n	<br style="clear:left;"/>\r\n\r\n	<div class="buttonShell operatorButton operatorButtonSquareRoot">\r\n		<a id="',input.idPrefix,'_squareRoot" href="javascript://" class="button" title="square root">&radic;</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton4">\r\n		<a id="',input.idPrefix,'_digit4" href="javascript://" class="button">4</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton5">\r\n		<a id="',input.idPrefix,'_digit5" href="javascript://" class="button">5</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton6">\r\n		<a id="',input.idPrefix,'_digit6" href="javascript://" class="button">6</a>\r\n	</div>\r\n	<div class="buttonShell operatorButton operatorButtonBasic operatorButtonMultiply">\r\n		<a id="',input.idPrefix,'_multiply" href="javascript://" class="button" title="multiply / times">&times;</a>\r\n	</div>\r\n	<br style="clear:left;"/>\r\n\r\n	<div class="buttonShell operatorButton operatorButtonClearEntry">\r\n		<a id="',input.idPrefix,'_clearEntry" href="javascript://" class="button" title="clear entry">CE</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton1">\r\n		<a id="',input.idPrefix,'_digit1" href="javascript://" class="button">1</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton2">\r\n		<a id="',input.idPrefix,'_digit2" href="javascript://" class="button">2</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton3">\r\n		<a id="',input.idPrefix,'_digit3" href="javascript://" class="button">3</a>\r\n	</div>\r\n	<div class="buttonShell operatorButton operatorButtonBasic operatorButtonSubtract">\r\n		<a id="',input.idPrefix,'_subtract" href="javascript://" class="button" title="minus / subtract">-</a>\r\n	</div>\r\n	<br style="clear:left;"/>\r\n\r\n	<div class="buttonShell operatorButton operatorButtonClear">\r\n		<a id="',input.idPrefix,'_clear" href="javascript://" class="button" title="clear all">C</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButton0">\r\n		<a id="',input.idPrefix,'_digit0" href="javascript://" class="button">0</a>\r\n	</div>\r\n	<div class="buttonShell digitButton digitButtonPoint">\r\n		<a id="',input.idPrefix,'_point" href="javascript://" class="button" title="decimal point">.</a>\r\n	</div>\r\n	<div class="buttonShell operatorButtonBasic operatorButtonEquals">\r\n		<a id="',input.idPrefix,'_equals" href="javascript://" class="button" title="equals / calculate result">=</a>\r\n	</div>\r\n	<div class="buttonShell operatorButton operatorButtonBasic operatorButtonAdd">\r\n		<a id="',input.idPrefix,'_add" href="javascript://" class="button" title="plus / add">+</a>\r\n	</div>\r\n	<br style="clear:left;"/>\r\n</div>\r\n\r\n');
return output.join('');};_a.input={idPrefix:'string'};return _a;}});