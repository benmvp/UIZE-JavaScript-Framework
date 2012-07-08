/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.Count.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Count',required:'Uize.Widget.Flip',builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;c_c.c_d=function(c_e){var c_f=this;return(c_f.c_g?'<img src="'+c_f.c_g+'/'+c_e+'.'+c_f.c_h+'" border="0" />':c_e);};c_c.c_i=function(c_j){var c_f=this,c_k=c_f.c_l,c_m=c_f.children;for(var c_n= -1;++c_n<c_f.c_o;){c_m['digit'+c_n].changeContent(c_f.c_d(c_k%c_f.c_p),c_j);c_k=Math.floor(c_k/c_f.c_p);}c_f.c_l||c_f.fire('zero');c_f.c_l==c_f.c_q&&c_f.fire('limit');};c_c.up=function(){var c_f=this;c_f.set({c_l:c_f.c_l==c_f.c_q?0:c_f.c_l+1});c_f.c_i('up');};c_c.down=function(){var c_f=this;c_f.set({c_l:c_f.c_l==0?c_f.c_q:c_f.c_l-1});c_f.c_i('down');};c_c.getCount=function(){return this.c_l;};c_c.setCount=function(c_r){var c_f=this;c_f.set({c_l:c_r});c_f.c_i('up');};c_c.zero=function(){var c_f=this;c_f.set({c_l:0});c_f.c_i('down');};c_c.wireUi=function(){var c_f=this;if(!c_f.isWired){for(var c_n= -1;++c_n<c_f.c_o;)c_f.addChild('digit'+c_n,Uize.Widget.Flip);
c_f.c_q||c_f.set({c_q:Math.pow(c_f.c_p,c_f.c_o)-1});c_a.prototype.wireUi.call(c_f);}};c_b.registerProperties({c_l:{name:'count',value:0},c_o:{name:'digits',value:2},c_q:{name:'limit',value:0},c_p:{name:'base',value:10},c_g:{name:'numbersImagesPath',value:''},c_h:{name:'numbersFiletype',value:'gif'}});return c_b;}});