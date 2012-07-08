/*
	UIZE Web Site 2012-07-07

	http://www.uize.com/reference/UizeDotCom.Templates.SimpleDocSample.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.SimpleDocSample',builder:function(){var _a=function(){};_a.process=function(input){var output=[];
output.push('Section\r\n	This is the first section of this document.\r\n\r\n	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n	function addSeries (start,end,step) {\r\n		num = start;\r\n		var sum = 0;\r\n		while (num <= end) {\r\n			sum += num;\r\n			num += step;\r\n		}\r\n		return sum;\r\n	}\r\n	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n	Blah, blah, blah.\r\n\r\n	#<<\r\n	This is a massive comment block\r\n		none of the stuff in here should be parsed or included\r\n		to reiterate, none of the stuff here should be considered\r\n		so i can say what i want and it will be ignored\r\n\r\n		yes, ignored - totally\r\n	#>>\r\n\r\n	------------------------------------------------------------\r\n\r\n	============================================================\r\n\r\nLots of Different Bullet list\r\n	This section contains lots of different styles of bullet lists...\r\n\r\n	Using dashes / hyphens...\r\n\r\n	- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Using stars...\r\n\r\n	* this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	* this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	* this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Using tildes...\r\n\r\n	~ this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	~ this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	~ this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Using colons...\r\n\r\n	: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Using periods...\r\n\r\n	. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Using multiple dashes...\r\n\r\n	--- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	--- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	--- this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with square bracket wrappers...\r\n\r\n	[@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	[@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	[@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Lettered list with parentheses wrappers...\r\n\r\n	(a) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	(a) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	(a) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Capitalized lettered list with parentheses wrappers...\r\n\r\n	{A} this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	{A} this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	{A} this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with angle bracket wrappers...\r\n\r\n	<1> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	<1> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	<1> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with double angle bracket wrappers...\r\n\r\n	<< # >> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	<< # >> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	<< # >> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with right parenthesis...\r\n\r\n	+) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	+) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	+) this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with right parenthesis...\r\n\r\n	@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	@] this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Lettered list with right angle bracket...\r\n\r\n	a> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	a> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	a> this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with hyphen separator...\r\n\r\n	# - this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	# - this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	# - this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with right period...\r\n\r\n	#. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	#. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	#. this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	Numbered list with right colon...\r\n\r\n	123: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	123: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n	123: this is a list item with a whole lot of stuff in it, and so when it wraps, it should wrap in the correct place to give things a decent appearance and so that it looks cool, and so that I don\'t have to cry like a whining little brat\r\n\r\n	A paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph.\r\n\r\n	Subsection\r\n\r\n		This is part of subsection 1.\r\n\r\n		Some more stuff in subsection 1.\r\n\r\n	### Subsection\r\n\r\n		Some stuff in subsection 2.\r\n\r\n		And a sub-sub-section\r\n\r\n			This is the stuff in the sub-sub-section\r\n\r\n		Some more stuff in subsection 2.\r\n\r\n	Now here\'s some more stuff in section 1.\r\n\r\nSection\r\n\r\n	Here\'s the stuff that will go into section 2. Isn\'t this a lovely section? I made it myself.\r\n\r\n');
return output.join('');};_a.input={};return _a;}});