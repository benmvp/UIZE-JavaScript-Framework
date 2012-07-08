/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.Pagination.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Pagination',required:['Uize.Widget.Button','Uize.Node','Uize.Node.Classes'],builder:function(c_a){var c_b=c_a.subclass(null,function(){var c_c=this;c_c.c_d('prev',function(){c_c.c_e(c_c.c_f-1)});c_c.c_d('next',function(){c_c.c_e(c_c.c_f+1)});}),c_g=c_b.prototype;c_g.c_d=Uize.Widget.Button.addChildButton;c_g.c_h=function(){return Math.ceil(this.c_i/this.c_j)};c_g.c_k=function(){var c_c=this,c_f=c_c.c_f,c_l=c_c.c_l,c_m=c_c.c_h(),c_n=1+(c_c.c_o&&c_f>1),c_p=c_m-(c_c.c_q&&c_f<c_m),c_r=Math.ceil(c_l/2),c_s=c_f-c_r+1,c_t=c_f+(c_l-c_r);if(c_s>=c_n&&c_t<=c_p)return c_s;else if(c_s>=c_n)return Math.max(c_n,c_p-c_l+1);else return c_n;};c_g.c_e=function(c_u){this.set({c_f:c_u})};c_g.c_v=function(){var c_c=this,c_w=c_c.children,c_f=c_c.c_f,c_m=c_c.c_h(),c_x=c_m>1,c_i=c_c.c_i;if(c_c.isWired){c_c.displayNode('',c_i>0);c_c.displayNode('paginationShell',c_x);c_c.setNodeInnerHtml('displayShell',c_c.localize('displayInfo',{number:(c_f-1)*c_c.c_j+1,toNumber:Math.min(c_i,c_f*c_c.c_j),
total:c_c.localize('numResultsDisplay',{numResults:c_c.c_i})||c_i}));if(c_x){function c_y(c_z,c_A){c_w[c_z].set({enabled:c_A?'inherit':c_A})}function c_B(c_z,c_C){c_w[c_z].displayNode('',c_C)}function c_D(c_z,c_E){c_w[c_z].set({text:c_E})}c_y('prev',c_f>1);c_y('next',c_f<c_m);c_B('first',c_f>1);c_B('last',c_f<c_m);c_D('last',c_m);var c_F=c_c.c_k();c_c.displayNode('less',c_F>(1+c_c.c_o));c_c.displayNode('more',(c_F+c_c.c_l)<(c_m-c_c.c_q));for(var c_G= -1;++c_G<c_c.c_l;){var c_H='page'+c_G,c_I=c_w[c_H].getNode(),c_u=c_F+c_G,c_J=c_u==c_f;c_D(c_H,c_J?c_c.localize('selectedPage',{page:c_u})||c_u:c_u);c_B(c_H,c_u==c_f||c_u<=(c_m-c_c.c_q));Uize.Node.Classes.setState(c_I,c_c.c_K,c_J);}}}};c_g.updateUi=function(){var c_c=this;if(c_c.isWired){c_c.c_v();c_a.prototype.updateUi.call(c_c);}};c_g.wireUi=function(){var c_c=this;if(!c_c.isWired){function c_L(c_M){return!!Uize.Node.getById(c_c.get('idPrefix')+'_'+c_M)}c_c.c_o=c_L('first');c_c.c_q=c_L('last');c_c.c_l= -1;while(c_L('page'+ ++c_c.c_l));c_c.c_o
&&c_c.c_d('first',function(){c_c.c_e(1)});c_c.c_q&&c_c.c_d('last',function(){c_c.c_e(c_c.c_h())});function c_N(c_G){c_c.c_d('page'+c_G,function(){c_c.c_e(c_c.c_k()+c_G)})}for(var c_G= -1;++c_G<c_c.c_l;)c_N(c_G);c_a.prototype.wireUi.call(c_c);}};c_b.registerProperties({c_K:{name:'classSelected',value:'selected'},c_i:{name:'numResults',onChange:[c_g.c_h,c_g.c_v]},c_j:{name:'pageSize',conformer:function(c_O){return c_O?c_O:30},onChange:[c_g.c_h,c_g.c_v],value:30},c_f:{name:'value',conformer:function(c_P){var c_m=this.c_h();return c_P?(!c_m||c_P<c_m?c_P:c_m):1},onChange:c_g.c_v,value:1}});return c_b;}});