/*
	UIZE Web Site 2011-10-23

	http://www.uize.com/reference/UizeDotCom.SiteMap.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.SiteMap',required:['UizeDotCom.ModulesTree','UizeDotCom.ExamplesInfoForSiteMap'],builder:function(){var _a;return function(){if(!_a){var _b={title:'-'};function _c(_d){return'reference/'+_d+'.html';}function _e(_f,_g,_h){var _d=_f+(_f&&'.')+_g,_i=_c(_d),_j={title:_g,link:_i},_k=_j.items=[];if(_h)for(var _l in _h)_k.push(_e(_d,_l,_h[_l]));_k.length&&_d&&_k.unshift({title:'[[ BASE ]]',link:_i},_b);return _j;}var _m=_e('','',UizeDotCom.ModulesTree());_m.title='Module Reference';_m.link='javascript-modules-index.html';function _j(_n,_o,_p){return{title:_n,link:(_o||'')+(_p||_n.toLowerCase().replace(/\W+/g,'-'))+'.html'}}function _q(_n,_p){return _j(_n,'explainers/',_p)}function _r(_s){return _j(_s+' News','','news-'+_s)}function _t(_n,_p){return _j(_n,'javascript-reference/',_p)}function _u(_n,_p){return _j(_n,'appendixes/',_p)}function _v(_n,_p){return _j(_n,'tests/performance/',_p)}var _w=UizeDotCom.ExamplesInfoForSiteMap();function _x(_y){
var _z='javascript-'+(_y!='all'?(_y+'-'):'')+'examples.html';return{title:Uize.capFirstChar(_y)+' examples',link:_z,items:[{title:'TOUR '+_y.toUpperCase()+' EXAMPLES',link:'javascript-feature-tours.html?tour='+_y},_b,{title:'Index of '+_y+' examples',link:_z}]}}var _A=[_x('featured'),_b];for(var _B= -1,_C=_w.keywords,_D=_C.length,_E;++_B<_D;)((_E=_C[_B])!='featured')&&_A.push(_x(_E));_A.push(_b,_x('all'),_b,{title:'EXAMPLES, BY MODULE...',link:'javascript-examples-by-module.html'});var _F=[_j('The DELVE Tool','','explainers/using-the-delve-tool'),_q('JavaScript Bookmarklets'),_b];for(var _G= -1,_H=_w.tools,_I=_H.length,_J;++_G<_I;)_F.push({title:(_J=_H[_G]).title,link:_J.path});_F.push(_b,_j('Index of JavaScript Tools','','javascript-tool-examples'));_a=[_j('Home','','index'),_j('DOWNLOAD'),_q('Getting Started'),{title:'Latest News',link:'latest-news.html',items:[_r(2011),_r(2010),_r(2009),_r(2008),_r(2006)]},_b,{title:'Examples',link:'javascript-examples.html',items:_A},_u('Showcase'),{title:'Widgets To Go',
link:'javascript-widgets.html'},{title:'Tools',link:'javascript-tool-examples.html',items:_F},_b,{title:'Explainers',link:'javascript-explainers.html',items:[_q('Introduction to UIZE'),_q('Getting Started With UIZE','getting-started'),_q('Using the Documentation'),_q('Overview of Features'),_q('Building UIZE-powered Pages'),{title:'MORE TOPICS...',items:[_q('JavaScript Modules'),_q('JavaScript Inheritance'),_q('Set-get Properties'),_q('JavaScript Event System'),_b,_q('JavaScript DOM Events'),_q('JavaScript Widgets'),_q('JavaScript Localization'),_q('JavaScript Templates'),_q('JavaScript Animation and Effects'),_b,_q('JavaScript Libraries'),_q('JavaScript Build Scripts'),_q('JavaScript Testing Framework'),_q('JavaScript Documentation System'),_q('All About Scrunching'),_q('JavaScript Troubleshooting'),_q('Using the DELVE Tool'),_b,_q('General Constructs'),_q('JavaScript Bookmarklets'),_q('The Philosophy of UIZE','philosophy-of-uize')]},_b,_j('Index of JavaScript Explainers','','javascript-explainers')]},_m,{
title:'JavaScript Reference',items:[_t('Array'),_t('Boolean'),_t('Date'),_t('Function'),_t('Math'),_t('Number'),_t('Object'),_t('RegExp'),_t('String'),_t('Window'),_t('XMLHTTPRequest')]},{title:'Appendixes',items:[_u('Press Center'),_u('Showcase'),_j('License'),_b,_u('Credits'),_j('Endorsements'),_b,_u('HTML Style Guide'),_u('JavaScript Code Conventions'),_u('JavaScript Optimization'),_b,_j('Index of JavaScript Modules','','javascript-modules-index'),_u('SOTU (State of the UIZE)','sotu'),_b,_u('JavaScript Fun'),_u('JavaScript Interview Questions'),_u('Code Fragments'),_u('Glossary')]},_b,{title:'UIZE Development',items:[_q('Creating a New UIZE Module'),_q('Creating a New UIZE Example Page'),_u('SOTU (State of the UIZE)','sotu'),_j('UIZE Unit Tests','examples/'),{title:'Performance Tests',items:[_v('Array Iteration Styles'),_v('Caching Node References'),_v('Checking if Undefined'),_v('Extended String Class'),_v('getElementById vs getElementsByName','getElementById-vs-getElementsByName'),
_v('Repeat String Approaches'),_v('Storing Length for Iterator'),_v('Storing Reference to Sub-object','storing-reference-to-subobject'),_v('String Concatenation Approaches'),_v('String Match Conditional Styles'),_v('String Starts With Substring Styles')]},{title:'TO DO',items:[_u('TO DO - Modules'),_u('TO DO - Documentation'),_u('TO DO - General'),_u('TO DO - News Announcements')]}]},_b,_j('SUPPORT'),_j('SITE MAP','','directory'),_j('SEARCH','','search-sections')];}return _a;};}});