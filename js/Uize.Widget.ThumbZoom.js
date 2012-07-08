/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.ThumbZoom.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ThumbZoom',required:['Uize.Widget.ImagePort','Uize.Widget.Drag','Uize.Node','Uize.Fade'],builder:function(c_a){var c_b=true,c_c=false,c_d=Uize.Node,c_e=Uize.Widget;var c_f;var c_g=c_a.subclass(function(){var c_h=this;c_h.showFade=Uize.Fade({duration:350,curve:Uize.Fade.celeration(1,0),quantization:1});c_h.hideFade=Uize.Fade({duration:250,curve:Uize.Fade.celeration(0,1),startValue:1,endValue:0});c_h.shieldFade=Uize.Fade({duration:3000,curve:Uize.Fade.celeration(1,0),startValue:0,endValue:1});},function(){var c_h=this;if(c_h.c_i)c_h.c_j=c_h.addChild('loadingProgress',c_e.Bar.Progress);}),c_k=c_g.prototype;c_k.wireUi=function(){var c_h=this;if(!c_h.isWired){if(c_h.c_i&& !c_h.c_j.getNode()){c_h.c_j.insertUi();c_h.c_j.setNodeStyle('',{position:'absolute'});}var c_l,c_m,c_n=c_h.showFade,c_o=c_h.hideFade,c_p=c_h.shieldFade;function c_q(){if(!c_m){c_m=document.createElement('img');c_d.setStyle(c_m,{display:'none',position:'absolute',zIndex:50001});c_h.wireNode(c_m,'load',function(c_r){
c_h.c_i&&c_h.c_j.set({inProgress:c_c});c_d.display(c_m);c_d.setOpacity(c_m,1);var c_s=c_d.getCoords(c_l),c_t=c_d.getDimensions(window),c_u=c_e.ImagePort.getScaledRect({portWidth:c_t.width,portHeight:c_t.height,rectWidth:c_m.width,rectHeight:c_m.height,alignX:.5,alignY:.5,sizingLowerBound:0,sizingUpperBound:'fit',sizingValue:.95,maxScaling:1}),c_v=document.documentElement;c_u.left+=c_v.scrollLeft;c_u.top+=c_v.scrollTop;var c_w=document.onkeydown,c_x=document.onmousemove,c_y=document.onmousedown,c_z=c_r.clientX,c_A=c_r.clientY;function c_B(){c_n.stop();document.onmousemove=c_x;document.onmousedown=c_y;document.onkeydown=c_w;c_p.stop();c_d.display(c_f,c_c);c_o.start();return c_c;}document.onkeydown=document.onmousedown=c_B;document.onmousemove=function(c_r){c_r=c_r||event;return(c_r.clientX!=c_z||c_r.clientY!=c_A?c_B():c_c);};function c_C(c_s){return{left:c_s.left,top:c_s.top,width:c_s.width,height:c_s.height};}c_n.start({startValue:c_C(c_s),endValue:c_C(c_u)});});document.body.appendChild(c_m);if(!c_f)
c_f=c_e.Drag.insertShield({zIndex:50000,backgroundColor:'#000'});c_n.wire({'Changed.value':function(){c_d.setStyle(c_m,c_n.valueOf());},Done:function(){c_d.setOpacity(c_f,0);c_d.display(c_f);c_p.start();}});c_o.wire({'Changed.value':function(){c_d.setOpacity(c_m,c_o);},Done:function(){c_d.display(c_m,c_c);}});c_p.wire({'Changed.value':function(){c_d.setOpacity(c_f,c_p);}});}}function c_D(){c_l=this;var c_E=c_c,c_F=c_l;while(c_F&&c_F.tagName!='A')c_F=c_F.parentNode;if(c_F){var c_G=c_F.getAttribute('href');if((c_h.c_H||/./).test(c_G)){c_q();if(c_h.c_i){var c_s=c_d.getCoords(c_l);c_h.c_j.setNodeStyle('',{left:c_s.x+3,top:c_s.y+c_s.height-1-c_h.c_j.getNode().offsetHeight-3});c_h.c_j.set({inProgress:c_b});}c_d.setStyle(c_m,{width:'',height:'',left:-10000,top:-10000});c_m.src=c_F.href;c_E=c_b;}}return!c_E;}c_d.doForAll(c_d.find(c_h.c_I),function(c_J){c_J.onclick=Uize.returnFalse;c_h.wireNode(c_J,'click',c_D);});}};c_g.registerProperties({c_H:{name:'imageValidator',value:/\.(jpg|jpeg|gif|png)/},c_i:{
name:'showLoadingProgress',value:c_c},c_I:{name:'thumbNodes',value:[]}});return c_g;}});