/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-07

	http://www.uize.com/reference/Uize.Widget.SegmentDisplay.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.SegmentDisplay',required:'Uize.Node.Classes',builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;var c_d=Uize.Node.Classes.setState;c_c.c_e=function(){var c_f=this;if(c_f.isWired){var c_g=c_f.c_g,c_h=c_f.c_h;c_f.forEachSegment(function(c_i,c_j,c_k){var c_l=c_h&c_k;if(c_g==null||c_l!=(c_g&c_k))c_d(c_f.getNode('segment'+c_j),[c_f.c_m,c_f.c_n],!!c_l);});c_f.c_g=c_h;}};c_c.forEachSegment=function(c_o){for(var c_i= -1,c_p=this.Class.segmentCodes,c_q=c_p.length,c_k=1<<c_q;++c_i<c_q;)c_o.call(this,c_i,c_p[c_i],c_k=c_k>>1);};c_c.getSegmentState=function(c_i){return!!(this.c_h&(this.Class.c_r>>c_i));};c_c.getSegmentsStateAsHex=function(c_s){return this.Class.getSegmentsStateAsHex(this.c_h,c_s);};c_c.invertAllSegmentsState=function(){this.set({c_h:this.c_h^this.Class.c_t});};c_c.setSegmentState=function(c_i,c_u){this.getSegmentState(c_i)!=c_u&&this.toggleSegmentState(c_i);};c_c.setAllSegmentsState=function(c_u){this.set({c_h:c_u?this.Class.c_t:0});};
c_c.toggleSegmentState=function(c_i){this.set({c_h:this.c_h^(this.Class.c_r>>c_i)});};c_c.updateUi=function(){this.c_e();};c_c.wireUi=function(){var c_f=this;if(!c_f.isWired){c_f.c_g=null;c_a.prototype.wireUi.call(c_f);}};c_b.c_v=function(c_h){return Math.max(Math.round(c_h),0)&this.c_t;};c_b.configureDisplay=function(c_p,c_w){var segmentCodesLength=(this.segmentCodes=c_p).length;this.segmentsStateToValueLookup=Uize.reverseLookup(this.valueToSegmentsStateLookup=c_w);this.c_t=(1<<segmentCodesLength)-1;this.c_r=1<<(segmentCodesLength-1);this.c_x=1<<(Math.ceil(segmentCodesLength/8)*8);};c_b.getSegmentsStateAsHex=function(c_h,c_s){c_h=this.c_v(c_h);if(c_s){for(var c_y=this.c_r,c_z=1;c_y>c_z;){if(!!(c_h&c_y)^ !!(c_h&c_z))c_h=c_h^c_y^c_z;c_y=c_y>>1;c_z=c_z<<1;}}return'0x'+(c_h|this.c_x).toString(16).slice(1);};c_b.getSegmentsStateFromValue=function(c_A){if((c_A+='').length==1){var c_w=this.valueToSegmentsStateLookup,c_h=c_w[c_A];if(c_h==null)c_h=c_w[c_A.toLowerCase()];if(c_h==null)c_h=c_w[c_A.toUpperCase()];
return c_h||0;}else{return this.c_v(c_A);}};c_b.getValueFromSegmentsState=function(c_h){return(this.segmentsStateToValueLookup[c_h=this.c_v(c_h)]||this.getSegmentsStateAsHex(c_h));};c_b.registerProperties({c_m:{name:'cssClassSegmentOff',value:'sevenSegSegmentOff'},c_n:{name:'cssClassSegmentOn',value:'sevenSegSegmentOn'},c_h:{name:'segmentsState',conformer:function(c_A){return this.Class.c_v(c_A)},onChange:[function(){this.set({c_A:this.Class.getValueFromSegmentsState(this.c_h)})},c_c.c_e]},c_A:{name:'value',conformer:function(c_A){return this.Class.getValueFromSegmentsState(this.Class.getSegmentsStateFromValue(c_A));},onChange:function(){this.set({c_h:this.Class.getSegmentsStateFromValue(this.c_A)})}}});return c_b;}});