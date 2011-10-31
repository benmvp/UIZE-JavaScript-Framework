/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-23

	http://www.uize.com/reference/Uize.Widget.Dialog.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog',required:['Uize.Node','Uize.Widget.Button','Uize.Widget.Drag','Uize.Fade'],builder:function(c_a){var c_b=true,c_c=false,c_d,c_e=Uize.Node,c_f=Uize.Widget,c_g=c_f.Drag;var c_h={},c_i={},c_j=0,c_k=Uize.Node.isIe&&navigator.appVersion.indexOf('MSIE 6')> -1;var c_l=c_a.subclass(function(){var c_m=this;(c_m.c_n=c_m.shieldFade=new Uize.Fade({curve:Uize.Fade.celeration(0,1),duration:750})).wire('Changed.value',function(){c_m.set({c_o:+c_m.c_n})});c_m.wire({'Drag Start':function(c_p){if(!c_m.c_q){c_m.c_q=c_b;c_m.fire('First Drag Since Shown');c_m.c_r&&c_m.set({c_s:c_c});}},'Drag Done':function(){var c_t=c_e.getById(c_m.c_t);if(c_t){var c_u=c_e.getCoords(c_t),c_v=c_m.getNode();c_m.set({offsetX:parseInt(c_e.getStyle(c_v,'left'))-c_u.left,offsetY:parseInt(c_e.getStyle(c_v,'top'))-c_u.top})}}});},function(){var c_m=this;var c_v,c_w=[0,0];(c_m.c_x=c_m.addChild('drag',c_g,{cursor:'move'})).wire({'Before Drag Start':function(c_p){c_v=c_m.getNode();
c_w[0]=parseInt(c_e.getStyle(c_v,'left'));c_w[1]=parseInt(c_e.getStyle(c_v,'top'));},'Changed.inDrag':function(){c_m.set({c_y:c_m.c_x.get('inDrag')})},'Drag Start':c_m,'Drag Update':function(c_p){var c_z=c_m.c_x.eventDeltaPos;c_e.setStyle(c_v,{left:c_w[0]+c_z[0],top:c_w[1]+c_z[1]});},'Drag Done':c_m});function c_A(c_B){c_m.c_A(c_B)}c_m.c_C('close',function(){c_A('Close')});c_m.c_C('qualifiedOk',function(){c_A('Qualified Ok')});c_m.c_C('ok',function(){c_A('Ok')});c_m.c_C('cancel',function(){c_A('Cancel')});c_m.c_D();c_m.atEndOfOmegaStructor();}),c_E=c_l.prototype;c_E.c_C=c_f.Button.addChildButton;c_E.c_A=function(c_B){this.fire(c_B).abort||this.set({c_F:c_c})};var c_G=c_E.c_G=function(){var c_m=this;if(c_m.isWired&&c_m.c_F&& !c_m.c_y){c_g.resizeShield(c_m.getNode('shield'));if(c_m.c_H){var c_v=c_m.getNode(),c_t=c_e.getById(c_m.c_t),c_I=c_m.c_I,c_J=c_m.c_J;if(!c_t||c_I==c_d||c_J==c_d)c_e.centerInWindow(c_v);if(c_t){if(c_I=='adjacent'||c_J=='adjacent'){c_e.setAbsPosAdjacentTo(c_v,c_t);}else{
var c_u=c_e.getCoords(c_t);c_e.setStyle(c_v,Uize.copyInto({},c_I!=c_d?{left:c_u.left+c_I}:c_d,c_J!=c_d?{top:c_u.top+c_J}:c_d));}}}}};var c_K=c_E.c_K=function(){var c_m=this;c_m.isWired&&c_m.c_F&& !c_m.c_y&&c_m.setNodeStyle('',{width:c_m.c_L,height:c_m.c_M});};c_E.c_N=function(){var c_m=this;c_m.isWired&&c_m.c_F&&c_m.setNodeOpacity('shield',c_m.c_o);};c_E.c_O=function(){var c_m=this;if(c_m.isWired){var c_P=c_m.c_Q||c_m.c_R;c_P!=c_d&&c_m.setNodeInnerHtml('title',c_P||'&nbsp;');}};var c_D=c_E.c_D=function(){var c_m=this,c_S=c_m.children;function c_T(c_U,c_V){c_U&&c_V!=c_d&&c_U.set({text:c_V});}c_T(c_S.ok,c_m.c_W||c_m.c_X);c_T(c_S.cancel,c_m.c_Y||c_m.c_Z);};c_E.atEndOfOmegaStructor=c_E.afterWireUi=function(){};c_E.updateUi=function(){this.c_O();};c_E.wireUi=function(){var c_m=this;if(!c_m.isWired){c_m.wireNode(window,'resize',function(){c_m.c_G()});c_m.c_x.set({node:c_m.getNode('title')});c_m.wireNode('shield','click',function(){c_m.c_0&&c_m.c_A('Close')});function c_1(c_2,c_U,c_3){if(!c_m.get(c_2)){
var c_4=(c_U.getNode(c_3)||c_h).innerHTML;c_4&&c_m.set(c_2,c_4);}}c_1('defaultTitle',c_m,'title');c_1('defaultOkText',c_m.children.ok,'text');c_1('defaultCancelText',c_m.children.cancel,'text');c_a.prototype.wireUi.call(c_m);c_m.afterWireUi();}};c_l.registerProperties({c_H:{name:'autoPosition',value:c_b,onChange:c_G},c_Y:{name:'cancelText',onChange:c_D},c_o:{name:'currentShieldOpacity',onChange:c_E.c_N},c_Z:{name:'defaultCancelText',onChange:c_D},c_X:{name:'defaultOkText',onChange:c_D},c_R:{name:'defaultTitle',onChange:c_E.c_O},c_0:{name:'dismissOnShieldClick',value:c_c},c_M:{name:'height',onChange:c_K},c_r:{name:'hideShieldOnDrag',value:c_b},c_y:{name:'inDrag',value:c_c},c_t:{name:'mooringNode',onChange:c_G},c_I:{name:'offsetX',onChange:c_G,value:0},c_J:{name:'offsetY',onChange:c_G,value:0},c_5:{name:'okEnabledOnShow',value:c_b},c_W:{name:'okText',onChange:c_D},c_6:{name:'shieldOpacity',onChange:function(){this.c_s&&this.set({c_o:this.c_6});},value:.3},c_s:{name:'shieldShown',onChange:function(){
var c_m=this;if(c_m.isWired&&c_m.c_F){if(c_m.c_s){if(c_k&&c_m.getNode('shield')){var c_7=c_m.getNode('ie6SelectHackShield');if(!c_m.getNode('ie6SelectHackShield')){c_m.flushNodeCache('ie6SelectHackShield');c_m.injectNodeHtml('shield','<iframe src="javascript:\'\'" id="'+c_m.c_8+'-ie6SelectHackShield" style="position:absolute; left:0; top:0; width:100%; height:100%; filter:alpha(opacity=0);" frameborder="0" scrolling="no"></iframe>','inner bottom');}}c_m.c_o=c_d;c_m.set({c_o:c_m.c_6});}else{c_m.c_n.start({startValue:c_m.c_6,endValue:.001});}}},value:c_c},c_F:{name:'shown',onChange:function(){var c_m=this;if(c_m.isWired){if(c_m.c_F){c_j++;c_m.c_q=c_c;typeof c_m.c_5=='boolean'&&c_m.children.ok.set({enabled:c_m.c_5?'inherit':c_c});c_m.fire('Before Show');c_m.setNodeStyle('',{position:'absolute'});var c_9= -1;for(var c_ba in c_i)c_9=Math.max(c_9,c_ba);c_i[c_m.c_ba= ++c_9]=1;c_m.setNodeStyle(['','shield'],{zIndex:4000+c_9*10});function c_bb(c_bc){c_m.showNode('',!c_bc);c_m.displayNode('',c_bc);}c_bb(c_b);c_m.c_K();
c_m.c_G();c_bb(c_c);}else{c_j--;delete c_i[c_m.c_ba];c_m.fire('Before Hide');}c_m.set({c_s:c_m.c_F});c_m.displayNode(['','shield'],c_m.c_F);c_m.fire(c_m.c_F?'After Show':'After Hide');}},value:c_c},c_Q:{name:'title',onChange:c_E.c_O},c_L:{name:'width',onChange:c_K}});return c_l;}});