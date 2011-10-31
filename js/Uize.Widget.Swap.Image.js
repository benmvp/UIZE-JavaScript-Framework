/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-23

	http://www.uize.com/reference/Uize.Widget.Swap.Image.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Swap.Image',required:['Uize.Node','Uize.Node.Util'],builder:function(d_a){var d_b=Uize.Node;var d_c=d_a.subclass(function(){var d_d=this;d_d.d_e=0;d_d.d_f=[];}),d_g=d_c.prototype;d_c.registerProperties({d_h:'background',d_i:'height',d_j:{name:'src|value',onChange:function(){var d_d=this;if(d_d.isWired){var d_k=d_d.getNode('item'+d_d.d_e),d_l=1-d_d.d_e,d_m=d_d.getNode('item'+d_l),d_n=d_d.getNode('item'+d_l+'Image');d_m.style.padding='0px';d_d.prepareForNextItem(d_k,d_m);function d_o(){var d_p=d_d.d_f[d_d.d_j];d_b.setStyle(d_m,{paddingLeft:(d_d.viewFinalCoords[2]+1-d_p.d_q)/2,paddingTop:(d_d.viewFinalCoords[3]+1-d_p.d_i)/2});function d_r(){d_n.Uize_Widget_ImageSwap_src=d_d.d_j;d_d.unwireNode(d_n);d_d.d_e=d_l;d_d.setCurrentItem(d_m);}if(d_n.Uize_Widget_ImageSwap_src===d_d.d_j){d_r();}else{d_d.wireNode(d_n,{load:d_r,error:d_r,abort:d_r});if(d_b.isIe&&/\.png$/i.test(d_d.d_j)){
d_n.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+d_d.d_j+'\', sizingMethod=\'crop\')';d_n.src=d_c.getBlankImageUrl();d_n.width=d_p.d_q;d_n.height=d_p.d_i;}else{d_n.src=d_d.d_j;}}}if(d_d.d_f[d_d.d_j]){d_o();}else{var d_s=new Image;d_s.onload=d_s.onerror=d_s.onabort=function(){d_s=null;d_d.d_f[d_d.d_j]={d_q:d_d.d_q||this.width,d_i:d_d.d_i||this.height};d_o();};d_s.src=d_d.d_j;}}},value:''},d_q:'width'});d_c.set({html:{process:function(input){var d_t=this.getNode(),d_u=d_b.getDimensions(d_t),d_h=input.background||d_b.Util.getEffectiveBgColor(d_t);function d_v(d_w){return('<div id="'+input.idPrefix+'-item'+d_w+'" style="position:absolute; margin:0px; padding:0px; left:0px; top:0px; width:'+d_u.width+'px; height:'+d_u.height+'px; background:'+d_h+'; overflow:hidden;"><img id="'+input.idPrefix+'-item'+d_w+'Image" src="'+d_c.getBlankImageUrl()+'"'+(typeof input.width=='number'?(' width="'+input.width+'"'):'')+(typeof input.height=='number'?(' height="'+input.height+'"'):'')+'/></div>');}
return d_v(0)+d_v(1);}}});return d_c;}});