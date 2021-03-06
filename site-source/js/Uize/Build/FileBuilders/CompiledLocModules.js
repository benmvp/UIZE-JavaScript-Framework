/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Build.FileBuilders.CompiledLocModules Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014-2016 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 3
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Build.FileBuilders.CompiledLocModules= module defines a file builder for locale string JavaScript modules in the site temp folder.

		*DEVELOPERS:* `Chris van Rensburg`

		Functions defined in the file builder are called as instance methods on an instance of a subclass of the =Uize.Services.FileBuilderAdapter= class, so the functions can access instance methods implemented in this class.
*/

Uize.module ({
	name:'Uize.Build.FileBuilders.CompiledLocModules',
	required:[
		'Uize.Build.Util',
		'Uize.Loc.Util.LocModuleCompiler'
	],
	builder:function () {
		'use strict';

		function _locFileSourceUrlFromTempUrl (m,_urlParts) {
			return m.sourceUrlFromTempUrl (_urlParts).replace (/\.js$/,'.loc');
		}

		return Uize.package ({
			description:'Locale string JavaScript modules under temp',
			urlMatcher:function (_urlParts) {
				var _pathname = _urlParts.pathname;
				return (
					_urlParts.fileType == 'js' &&
					this.isTempUrl (_pathname) &&
					this.fileExists ({path:_locFileSourceUrlFromTempUrl (this,_pathname)})
				);
			},
			builderInputs:function (_urlParts) {
				return {source:_locFileSourceUrlFromTempUrl (this,_urlParts.pathname)};
			},
			builder:function (_inputs,_urlParts) {
				var _params = this.params;
				return Uize.Loc.Util.LocModuleCompiler.compile (
					Uize.Build.Util.moduleNameFromModulePath (
						_urlParts.pathname.slice ((_params.tempPath + '/' + _params.modulesFolder + '/').length),
						true
					),
					_inputs.source,
					_urlParts.fileName
				);
			}
		});
	}
});

