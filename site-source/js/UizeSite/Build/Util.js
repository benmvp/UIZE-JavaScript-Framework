/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Build.Util Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2012-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 4
	codeCompleteness: 100
	docCompleteness: 2
*/

/*?
	Introduction
		The =UizeSite.Build.Util= package provides various utility methods to facilitate building of pages for the UIZE Web site.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'UizeSite.Build.Util',
	required:[
		'Uize.Build.Util',
		'Uize.Url',
		'Uize.String',
		'Uize.Services.FileSystem'
	],
	builder:function () {
		'use strict';

		/*** General Variables ***/
			var
				_fileSystem = Uize.Services.FileSystem.singleton (),
				_moduleNameFromModulePath = Uize.Build.Util.moduleNameFromModulePath
			;

		return {
			getJsModules:function (_params) {
				var
					_modulesPath = _params.sourcePath + '/' + _params.modulesFolder,
					_trueFlag = {},
					_modulesLookup = {},
					_moduleName,
					_modules = _fileSystem.getFiles ({
						path:_modulesPath,
						recursive:true,
						pathMatcher:Uize.Build.Util.jsModuleExtensionRegExp,
						pathTransformer:function (_filePath) {
							_modulesLookup [_moduleName = _moduleNameFromModulePath (_filePath,true)] = _trueFlag;
							return _moduleName;
						}
					})
				;
				_fileSystem.getFolders ({
					path:_modulesPath,
					recursive:true,
					pathTransformer:function (_filePath) {
						if (_modulesLookup [_moduleName = _moduleNameFromModulePath (_filePath)] != _trueFlag)
							_modules.push (_moduleName)
						;
					}
				});
				return _modules.sort ();
			},

			getIndexableFiles:function (_sourcePath,_indexableFolderUnderSource,_indexableFileExtensionRegExp) {
				return _fileSystem.getFiles ({
					path:_sourcePath + '/' + _indexableFolderUnderSource,
					pathMatcher:function (_filePath) {
						return (
							_indexableFileExtensionRegExp.test (_filePath) &&
							!Uize.String.startsWith (Uize.Url.from (_filePath).fileName,'~')
						);
					}
				});
			}
		};
	}
});
