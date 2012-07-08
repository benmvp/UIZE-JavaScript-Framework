/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.Calendar.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Calendar',required:['Uize.Widget.Button','Uize.Date','Uize.Date.Formatter'],builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e=Uize.Date,c_f=c_e.dayNames,c_g=c_e.monthNames;var c_h=c_a.subclass(c_d,function(){var c_i=this;c_i.c_j=c_i.c_k('nextMonth',function(){c_i.set({c_l:c_i.c_l+1})});c_i.c_m=c_i.c_k('previousMonth',function(){c_i.set({c_l:c_i.c_l-1})});c_i.c_n=c_i.c_k('nextYear',function(){c_i.set({c_o:c_i.c_o+1})});c_i.c_p=c_i.c_k('previousYear',function(){c_i.set({c_o:c_i.c_o-1})});c_i.c_q=c_b;c_i.c_r();}),c_s=c_h.prototype;c_s.c_k=Uize.Widget.Button.addChildButton;var c_t=c_s.c_t=function(){var c_i=this,c_u={minValue:c_i.c_v,maxValue:c_i.c_w};c_i.c_x&& !c_e.inRange(c_i.c_x,c_u)&&c_i.set({c_x:c_d});var c_y=c_i.c_x||new Date;if(!c_e.inRange(c_y,c_u))c_y=c_i.c_v||c_i.c_w;c_i.set({c_l:c_y.getMonth(),c_o:c_y.getFullYear()});};var c_r=c_s.c_r=function(){var c_i=this;if(c_i.c_q){var c_z=new Date(c_i.c_o,c_i.c_l,1),c_A=c_e.getRangeAround(c_z,'month'),
c_B=c_e.getRangeAround(c_z,'year'),c_v=c_i.c_v,c_w=c_i.c_w;function c_C(c_D,c_E){c_D.set({enabled:c_E?'inherit':c_c});}c_C(c_i.c_m,!c_v||c_v<c_A.minValue);c_C(c_i.c_j,!c_w||c_w>c_A.maxValue);c_C(c_i.c_p,!c_v||c_v<c_B.minValue);c_C(c_i.c_n,!c_w||c_w>c_B.maxValue);}};c_s.c_F=function(){this.isWired&&this.setNodeValue('month',c_g[this.c_l]);};c_s.c_G=function(){this.isWired&&this.setNodeValue('year',this.c_o);};var c_H=c_s.c_H=function(){var c_i=this;if(c_i.isWired){function c_I(c_y,c_J){return(c_y?c_y.getFullYear()*10000+(c_y.getMonth()+1)*100+c_y.getDate():c_J);}var c_x=c_i.c_x,c_v=c_i.c_v,c_w=c_i.c_w,c_o=c_i.c_o,c_l=c_i.c_l,c_K=c_e.getDaysInMonth(c_l,c_o),c_L=new Date(c_o,c_l,1),c_M=c_I(c_L),c_N=Uize.constrain(c_I(c_v,0)-c_M+1,1,c_K+1),c_O=Uize.constrain(c_I(c_w,Infinity)-c_M+1,-1,c_K),c_P=c_i.c_P;if(!c_P||c_x!=c_P.c_x||c_l!=c_P.c_l||c_o!=c_P.c_o||c_N!=c_P.c_N||c_O!=c_P.c_O){if(c_P){for(var c_Q=0,c_R;++c_Q<32;){c_i.unwireNode(c_R='day'+c_Q);c_i.flushNodeCache(c_R);}}if(!c_P)c_P=c_i.c_P={};c_P.c_x=c_x;
c_P.c_l=c_l;c_P.c_o=c_o;c_P.c_N=c_N;c_P.c_O=c_O;var c_S=['<table class="calendarGrid" cellpadding="0" cellspacing="0"><tr>'];for(var c_Q= -1;++c_Q<7;)c_S.push('<th title="'+c_f[c_Q]+'">'+c_f[c_Q].charAt(0)+'</th>');c_S.push('</tr><tr>');var c_T=c_I(c_x,c_d),c_U=c_i.get('idPrefix'),c_Q=1-c_L.getDay();for(var c_V= -1;++c_V<6;){c_S.push('<tr>');for(var c_W= -1;++c_W<7;){if(c_Q>0&&c_Q<=c_K){var c_X=c_I(new Date(c_o,c_l,c_Q))==c_T;c_S.push(c_Q>=c_N&&c_Q<=c_O?('<td'+(c_X?' class="selected"':'')+'><a href="javascript://" id="'+c_U+'-day'+c_Q+'" style="display:block; width:100%; text-align:center;">'+c_Q+'</a></td>'):('<td class="'+(c_X?'selected ':'')+'grayed">'+c_Q+'</td>'),'</td>');}else{c_S.push('<td>&nbsp;</td>');}c_Q++;}c_S.push('</tr>');}c_S.push('</table>');c_i.setNodeInnerHtml('grid',c_S.join(''));function c_Y(c_Q){c_i.wireNode('day'+c_Q,'click',function(){c_i.set({c_x:new Date(c_o,c_l,c_Q)})});}for(var c_Q=c_K+1;--c_Q>0;)c_Y(c_Q);}}else{c_i.c_P=c_d;}};c_s.updateUi=function(){this.c_F();this.c_G();
this.c_H();};function c_Z(c_x){return c_e.Formatter.parse(c_x,this.c_0)||null;}c_h.registerProperties({c_0:'displayFormat',c_w:{name:'maxValue',conformer:c_Z,onChange:[c_t,c_H,c_r]},c_v:{name:'minValue',conformer:c_Z,onChange:[c_t,c_H,c_r]},c_l:{name:'month',conformer:function(c_x){var c_1=Math.floor(c_x/12);c_1&&this.set({c_o:this.c_o+c_1});return((c_x%12)+12)%12;},onChange:[c_s.c_F,c_H,c_r]},c_2:{name:'snapViewOnValueChange',value:c_b},c_x:{name:'value',conformer:c_Z,value:new Date,onChange:[function(){this.c_2&&this.c_t()},c_H,c_r]},c_o:{name:'year',onChange:[c_s.c_G,c_H,c_r]}});return c_h;}});