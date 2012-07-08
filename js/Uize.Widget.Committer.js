/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.Committer.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Committer',required:'Uize.Widget.Button',builder:function(c_a){var c_b=null,c_c=true,c_d=false;var c_e=c_a.subclass(function(){var c_f=this;c_f.c_g;c_f.c_h=c_f.c_i('commit',function(){c_f.commit()});c_f.c_j=c_f.c_i('clearAll',function(){c_f.clearAll()});c_f.c_k=c_f.c_i('restoreInitial',function(){c_f.restoreInitial()});c_f.c_l=c_f.c_i('restorePrevious',function(){c_f.restorePrevious()});}),c_m=c_e.prototype;c_m.c_i=Uize.Widget.Button.addChildButton;c_m.c_n=function(){if(this.c_g)clearTimeout(this.c_g);};c_m.c_o=function(c_p){var c_f=this,c_q=c_f.c_q,c_r=c_f.c_r,c_s=c_f.get(c_p+'Values'),c_t;for(var c_u in c_r){var c_v=c_q[c_u];c_v.instance.set(c_v.name,c_s&&c_s[c_u]!=c_t?c_s[c_u]:'');}};c_m.c_w=function(){var c_f=this,c_x=c_c,c_y=c_c,c_z=c_d,c_A=c_d,c_r=c_f.c_r,c_B=c_f.c_B,c_C=c_f.c_C,c_q=c_f.c_q;for(var c_u in c_r){var c_D=c_B[c_u];if(!c_z)c_z=c_D!==c_r[c_u];if(!c_A)c_A=c_D!==c_C[c_u];if(c_y)c_y=c_D=='';if(c_x)c_x=c_q[c_u].instance.get('isValid')===c_c;}c_f.set({c_y:c_y,
c_x:c_x,c_z:c_z,c_A:c_A,c_E:c_z&&c_x});};c_m.c_F=function(c_u,c_v){var c_f=this,c_G=c_v.instance,c_H=c_v.name;c_G.wire('Changed.'+c_H,function(){c_f.c_B[c_u]=c_G.get(c_H);c_f.fire('Changed.uncommittedValues');c_f.c_w();if(c_f.c_E&&c_f.c_I){c_f.c_n();c_f.c_g=setTimeout(function(){c_f.commit()},c_f.c_I)}});c_G.wire('Changed.isValid',function(){c_f.c_w()});};c_m.clearAll=function(){this.c_o('clear')};c_m.commit=function(){var c_f=this;c_f.c_n();if(c_f.c_E){c_f.set({c_r:Uize.copyInto({},c_f.c_B)});c_f.fire('Commit');c_f.c_w();}};c_m.addWatchedProperties=function(c_J){var c_K= -1,c_L=c_J?c_J.length:0,c_f=this,c_r={},c_B={},c_C={},c_M={};for(;++c_K<c_L;){var c_N=c_J[c_K];if(c_N){var c_O=c_N.alias,c_P=c_N.name,c_Q=c_N.instance,c_v={instance:c_Q,name:c_P};c_M[c_O]=c_v;c_f.c_F(c_O,c_v);c_r[c_O]=c_B[c_O]=c_C[c_O]=c_Q.get(c_P);}}Uize.copyInto(c_f.c_q||(c_f.c_q={}),c_M);c_f.set({c_r:Uize.copyInto(c_f.c_r,c_r),c_B:Uize.copyInto(c_f.c_B,c_B),c_C:Uize.copyInto(c_f.c_C,c_C)});c_f.c_w();c_f.fire({
name:'Watched Properties Added',properties:c_M});};c_m.removeWatchedProperties=function(c_R){var c_K= -1,c_S={},c_T=c_R?c_R.length:0,c_f=this,c_r=c_f.c_r,c_C=c_f.c_C,c_B=c_f.c_B,c_q=c_f.c_q;for(;++c_K<c_T;){var c_u=c_R[c_K],c_v=c_q[c_u];if(c_v){var c_G=c_v.instance;c_G.unwire('Changed.isValid');c_G.unwire('Changed.'+c_v.name);delete c_q[c_u];delete c_r[c_u];delete c_B[c_u];delete c_C[c_u];c_S[c_u]=c_v;}}c_f.c_w();c_f.fire({name:'Watched Properties Removed',properties:c_S});};c_m.restoreInitial=function(){this.c_o('initial')};c_m.restorePrevious=function(){this.c_o('committed')};c_e.registerProperties({c_y:{name:'allClear',onChange:function(){this.c_j.set({enabled:this.c_y?c_d:'inherit'});},value:c_d},c_x:{name:'allValid',value:c_d},c_A:{name:'anyNotInitial',onChange:function(){this.c_k.set({enabled:this.c_A?'inherit':c_d});},value:c_d},c_z:{name:'anyNotCommitted',onChange:function(){this.c_l.set({enabled:this.c_z?'inherit':c_d});},value:c_d},c_I:'autoCommitDelay',c_r:{name:'committedValues',value:{}},c_C:{
name:'initialValues',value:{}},c_E:{name:'readyToCommit',onChange:function(){this.c_h.set({enabled:this.c_E?'inherit':c_d});},value:c_d},c_B:{name:'uncommittedValues',value:{}},c_q:{name:'watchedProperties',onChange:function(){var c_f=this,c_q=c_f.c_q,c_r={},c_B={},c_C={};if(c_q)for(var c_u in c_q){var c_v=c_q[c_u];c_r[c_u]=c_B[c_u]=c_C[c_u]=c_v.instance.get(c_v.name);c_f.c_F(c_u,c_v);}c_f.set({c_r:c_r,c_C:c_C,c_B:c_B});c_f.c_w();}}});return c_e;}});