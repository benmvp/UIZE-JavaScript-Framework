/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-23

	http://www.uize.com/reference/Uize.Widget.Picker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Picker',superclass:'Uize.Widget.FormElement',required:['Uize.Widget.Button.ValueDisplay','Uize.Node.Event'],builder:function(d_a){var d_b=null;var d_c=d_a.subclass(d_b,function(){var d_d=this;function d_e(){d_d.set({focused:false});var d_f=d_d.children.selector.getNode()||d_d.getNode('input'),d_g=Uize.Node.getDimensions(d_f);function d_h(){d_d.d_i&&d_d.set({focused:true})}d_d.callInherited('useDialog')({component:d_d.d_j?Uize.copyInto(d_d.d_j,{value:d_d.get('value')}):d_b,widgetClassName:d_d.d_k,widgetProperties:Uize.copyInto({name:'dialog'+d_d.d_k.replace(/\./g,''),mooringNode:d_f,offsetX:d_g.width>>1,offsetY:d_g.height>>1},d_d.getDialogWidgetProperties(),d_d.get((d_d.d_l||[]).concat('value'))),submitHandler:function(d_m,d_n){var d_o=d_m.value;d_d.set({d_p:d_m.valueDetails,value:d_o!=d_b?(d_d.d_q?d_d.d_q.call(d_d,d_o):d_o):''});d_n.keepOpen||d_h();},dismissHandler:d_h});}d_d.wire('Changed.focused',function(){d_d.get('focused')&& !d_d.d_i&&d_e()});d_d.wireNode('input',
'mousedown',function(d_n){if(!d_d.d_i){Uize.Node.Event.abort(d_n);d_e();}});d_d.addChild('selector',d_d.d_r||Uize.Widget.Button.ValueDisplay,d_d.d_s).wire('Click',d_e);}),d_t=d_c.prototype;d_t.getDialogWidgetProperties=function(){return d_b};d_c.registerProperties({d_k:'dialogWidgetClass',d_i:{name:'allowManualEntry',value:true},d_j:'dialogComponent',d_l:'pipedProperties',d_r:'selectorButtonWidgetClass',d_s:'selectorButtonWidgetProperties',d_p:{name:'valueDetails',onChange:function(){var d_u=this.children.selector;d_u&&d_u.set({valueDetails:this.d_p});}},d_q:'valueFormatter'});return d_c;}});