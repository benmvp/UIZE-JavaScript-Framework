/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Json.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Json',builder:function(){var _a=function(){},_b,_c=true,_d=false,_e='string',_f=[];var _g='       ',_h=_g.replace(/ /g,_g).replace(/ /g,_g),_i={RegExp:1,Date:1,String:1,Number:1,Boolean:1},_j={'break':1,'boolean':1,'case':1,'catch':1,'continue':1,'const':1,'debugger':1,'default':1,'delete':1,'do':1,'else':1,'export':1,'false':1,'finally':1,'for':1,'function':1,'if':1,'import':1,'in':1,'instanceof':1,'new':1,'null':1,'return':1,'switch':1,'this':1,'throw':1,'true':1,'try':1,'typeof':1,'var':1,'void':1,'while':1,'with':1};_a.from=function(_k){return _k?eval('('+_k+')'):null;};_a.to=function(_l,_m){_m=(typeof _m=='string'?_n[_m]:_m)||_n.nice;function _o(_p,_q){var _r=_m[_p];return typeof _r==_e?_r:_q;}var _s=[],_t=_o('indentChars','\t'),_u=_o('linebreakChars','\n'),_v=_o('quoteChar','\''),_w=new RegExp(_v,'g'),_x='\\'+_v,_y=_m.sortKeys===true,_z=_m.padKeys===true,_A=_m.keyDelimiter||':',_B={left:0,center:0.5,right:1}[_m.keyAlign||'left'],_C=_m.whenToQuoteKeys||'auto';
function _D(_E){return _h.substr(0,_E)}function _F(_e){return(_v+_e.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(_w,_x)+_v);}function _G(_H,_I,_J,_K){var _L=0,_M=typeof _H;function _N(_O,_K){_s.push(_J+(_L++ ?'':_I)+_O+(_K?',':''));}if(_H==_b||_M=='number'||_M=='boolean'||_M=='function'){_N(_H,_K);}else if(_M==_e){_N(_F(_H),_K);}else if(_M=='object'){var _P=_H.constructor,_Q=_P==Object||_P==Array,_R;if(!_Q)_R=(((_P+'').match(typeof _P=='object'?/\[object\s+([^\]]+)\]/:/^\s*function\s+([^\(]+)\s*\(/)||_f)[1])||'';if(_Q||_R=='Object'||_R=='Array'){var _S=_J+_t;if(_H instanceof Array||(_H&&Uize.isFunction(_H.splice))){var _T=_H.length;if(_T){var _U=_T-1;_N('[');for(var _V= -1;++_V<_T;)_G(_H[_V],'',_S,_V<_U);_N(']',_K);}else{_N('[]',_K);}}else{var _W=Uize.keys(_H),_X=_W.length;if(_X){_y&&_W.sort();function _Y(_Z){return(isNaN(+_Z)?(/[^\w\$]|^\d/.test(_Z)||_j[_Z]):_Z!= +_Z+''||_Z<0);}var _0=_C=='always';if(!_0&&_C=='auto all'){for(var _1= -1;++_1<_X&& !_0;)_0=_0||_Y(_W[_1]);}var _2=[];
for(var _1= -1;++_1<_X;){var _Z=_W[_1];_2[_1]=(_0||_Y(_Z))?_F(_Z):_Z;}var _3=0;if(_z){for(var _1= -1;++_1<_X;)_3=Math.max(_3,_2[_1].length);}var _4=_X-1;_N('{');for(var _1= -1;++_1<_X;){var _5='',_6=_2[_1];if(_z){var _7=_3-_6.length,_8=Math.round(_B*_7);_5=_D(_8);_6+=_D(_7-_8);}_G(_H[_W[_1]],_6+_A,_S+_5,_1<_4);}_N('}',_K);}else{_N('{}',_K);}}}else{if(_i[_R]){_N('new '+_R+' ('+(_R=='String'?_F(_H):_H.valueOf())+')',_K);}else{_N('{}',_K);}}}}_G(_l,'','');return _s.join(_u);};var _9={indentChars:'\t',keyAlign:'left',keyDelimiter:':',linebreakChars:'\n',padKeys:_d,quoteChar:'\'',sortKeys:_d,whenToQuoteKeys:'auto'},_ba={whenToQuoteKeys:'always',quoteChar:'"'},_bb={indentChars:'',linebreakChars:''},_n=_a.encodingOptionsPresets={mini:Uize.copyInto({},_9,_bb),miniStrict:Uize.copyInto({},_9,_bb,_ba),nice:_9,strict:Uize.copyInto({},_9,_ba)};return _a;}});