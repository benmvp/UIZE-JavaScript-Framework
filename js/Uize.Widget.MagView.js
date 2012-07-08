/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.MagView.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.MagView',required:['Uize.Node','Uize.Fade','Uize.Widget.ImagePort'],builder:function(c_a){var c_b=true,c_c=false,c_d,c_e=null,c_f=Uize.Node;var c_g={};var c_h=c_a.subclass(function(){var c_i=this;if(Uize.Fade)c_i.c_j=Uize.Fade({duration:450,curve:Uize.Fade.celeration(0,1)});c_i.c_k=c_i.addChild('magImagePort',Uize.Widget.ImagePort,{sizingUpperBound:'fill',sizingLowerBound:0});if(c_i.c_l)c_i.c_m=c_i.addChild('beam',Uize.Widget.Beam);}),c_n=c_h.prototype;c_n.c_o=function(){return this.isWired&&this.c_p};c_n.c_q=function(){var c_r=this.c_s,c_t=c_r,c_u=c_r,c_v=this.c_v;if(c_v){var c_w=c_v.length;if(c_w){c_t=c_u=Infinity;for(var c_x= -1;++c_x<c_w;){var c_s=c_v[c_x];if(c_s<c_t)c_t=c_s;if(c_s>c_r&&c_s<c_u)c_u=c_s;}if(c_u==Infinity)c_u=c_t;}}return{c_t:c_t,c_u:c_u};};c_n.c_y=function(c_s){var c_z=this.c_z;return(Uize.isFunction(c_z)?c_z.call(this,c_s):c_z);};c_n.c_A=function(){var c_i=this;if(c_i.c_o()){var c_z=c_i.c_y(c_i.c_s);if(c_z!==c_i.c_B){function c_C(c_D){
c_f.show(c_i.getNode('magImageHighRes'),c_D);c_i.displayNode('magImageLowRes',!c_D);}var c_E=c_g[c_z];if(!c_E){var c_F=c_i.c_G,c_v=c_i.c_v;if(c_v){for(var c_x= -1,c_w=c_v.length,c_r=c_i.c_s,c_H=0;++c_x<c_w;){var c_s=c_v[c_x];if(c_s<c_r&&c_s>c_H){var c_I=c_i.c_y(c_s);if(c_g[c_I]){c_F=c_I;c_H=c_s;}}}}c_i.setNodeProperties('magImageLowRes',{src:c_F});c_i.displayNode('highResLoading');c_C(c_c);function c_J(){c_i.unwireNode('magImageHighRes');c_g[c_z]=1;c_i.displayNode('highResLoading',c_c);c_C(c_b);}c_i.wireNode('magImageHighRes',{load:c_J,error:c_J,abort:c_J});}c_i.c_B=c_z;c_i.setNodeProperties('magImageHighRes',{src:c_z});}}};c_n.c_K=function(){var c_i=this,c_s=c_i.c_s,c_L=c_i.c_L,c_M=c_i.c_M,c_N=c_i.c_O/c_s,c_P=c_i.c_Q/c_s,c_R=c_i.c_R=c_N*c_L,c_S=c_i.c_S=c_P*c_M;c_i.c_T=c_R*c_i.c_U;c_i.c_V=c_S*c_i.c_W;c_i.c_X=c_L-c_R;c_i.c_Y=c_M-c_S;c_i.c_Z=Math.min(1/c_N,1/c_P);c_i.c_l&&c_i.c_m.set({thinSize:c_i.c_S/c_M,height:c_M,top:c_i.c_0});};c_n.c_1=function(){var c_i=this;function c_2(){c_i.c_3=c_i.c_s;c_i.c_A();}
if(c_i.c_o()){function c_4(){c_i.c_K();c_i.c_5();}if(c_i.c_j){var c_j=c_i.c_j;c_j.set({startValue:c_i.c_3,endValue:c_i.c_s});var c_6={'Changed.value':function(){c_i.c_s= +c_j;c_4();},Done:function(){c_j.unwire(c_6);c_2();c_i.c_7=c_c;}};c_j.wire(c_6);c_i.c_7=c_b;c_i.c_j.start();}else{c_4();c_2();}}else{c_2();}};c_n.c_5=function(){var c_i=this,c_8=Uize.constrain((c_i.c_9.left-c_i.c_ba-c_i.c_T)/c_i.c_X,0,1),c_bb=Uize.constrain((c_i.c_9.top-c_i.c_0-c_i.c_V)/c_i.c_Y,0,1),c_bc=c_i.c_ba+c_i.c_X*c_8,c_bd=c_bc+c_i.c_R;c_i.c_l&&c_i.c_m.set({thinAlign:c_bb,left:c_bd,width:c_i.c_ba+c_i.c_L-c_bd});c_i.c_k.set({alignX:c_8,alignY:c_bb,sizingValue:c_i.c_Z});c_i.setNodeStyle('highlight',{left:c_bc,top:c_i.c_0+c_i.c_Y*c_bb,width:c_i.c_R-2,height:c_i.c_S-2});};c_n.wireUi=function(){var c_i=this;if(!c_i.isWired){var c_be=c_f.getDimensions(c_i.getNode()),c_L=c_i.c_L=c_be.width,c_M=c_i.c_M=c_be.height;function c_bf(c_D){c_i.displayNode(['magImagePortShell','highlight',c_i.c_l?c_i.c_m.getNode():c_e],c_D);c_i.c_p=c_D;}c_i.wireNode(
'','mouseover',function(c_bg){c_bf(c_b);if(!c_i.c_bh){c_i.c_bh=c_b;var c_bi=document.body;function c_bj(c_bk){c_bi.insertBefore(c_bk,c_bi.childNodes[0]);c_f.setStyle(c_bk,{zIndex:100000,position:'absolute'});}c_bj(c_i.getNode('magImagePortShell'));c_bj(c_i.getNode('highlight'));c_i.c_l&&c_bj(c_i.c_m.getNode());}var c_bl=c_f.getCoords(c_i.getNode()),c_bm=c_f.getDimensions(c_i.c_k.getNode());c_i.c_ba=c_bl.x;c_i.c_0=c_bl.y;c_i.c_bn=c_bm.width;c_i.c_bo=c_bm.height;c_i.c_O=c_i.c_bn/c_L;c_i.c_Q=c_i.c_bo/c_M;c_i.setNodeStyle('magImagePortShell',{left:c_i.c_ba+c_L,top:c_i.c_0});c_i.c_K();c_i.c_A();var c_bp=document.onmousemove,c_bq=document.onclick;function c_br(){c_i.c_9=c_f.getEventAbsPos();if(c_f.doRectanglesOverlap(c_i.c_9.left,c_i.c_9.top,1,1,c_i.c_ba,c_i.c_0,c_L,c_M)){c_i.c_5();}else{c_bf(c_c);document.onmousemove=c_bp;document.onclick=c_bq;c_i.c_bs&&c_i.set({c_s:c_i.c_q().c_t});}}c_br();document.onmousemove=c_br;document.onclick=function(){c_i.c_7||c_i.set({c_s:c_i.c_q().c_u});};});
c_a.prototype.wireUi.call(c_i);}};c_h.registerProperties({c_U:{name:'cursorAlignX',value:.5},c_W:{name:'cursorAlignY',value:.75},c_G:'magImageLowResUrl',c_z:{name:'magImageHighResUrl',onChange:c_n.c_A},c_s:{name:'magPower',value:1,onChange:c_n.c_1},c_v:{name:'magPowers',onChange:function(){this.set({c_s:this.c_v[0]})}},c_bs:{name:'resetMagPowerOnOut',value:c_b},c_l:{name:'showBeam',value:c_c}});return c_h;}});