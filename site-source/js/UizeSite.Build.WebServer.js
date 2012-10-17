/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Build.WebServer Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2012 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 1
	codeCompleteness: 100
	testCompleteness: 0
	docCompleteness: 4
*/

/*?
	Introduction
		The =UizeSite.Build.WebServer= package provides a method for running a Web server for the UIZE Web site on the localhost.

		*DEVELOPERS:* `Chris van Rensburg`

		EXAMPLE USAGE
		......................................................................................................
		node _build.js UizeSite.Build.WebServer sourcePath=site-source tempPath=site-temp builtPath=site-built freshBuild=true
		......................................................................................................

		Parameters
			sourcePath
				document...

			tempPath
				document...

			builtPath
				document...

			freshBuild
				document...
*/

Uize.module ({
	name:'UizeSite.Build.WebServer',
	required:[
		'Uize.Url',
		'Uize.String',
		'Uize.Services.FileSystem',
		'Uize.Doc.Simple',
		'Uize.Templates.JstModule',
		'Uize.Data.Simple'
	],
	builder:function () {
		/*** Variables for Scruncher Optimization ***/
			var
				_package = function () {},
				_Uize = Uize,
				_Uize_Url = _Uize.Url
			;

		/*** General Variables ***/
			var
				_fileSystem = Uize.Services.FileSystem.singleton (),
				_sacredEmptyObject = {}
			;

		/*** Public Static Methods ***/
			_package.perform = function (_params) {
				var
					_port = 1337,
					_host = '127.0.0.1',
					_http = require ('http'),
					_mimeTypes = {
						html:'text/html',
						text:'text/plain',
						js:'application/javascript',
						css:'text/css',
						png:'image/png',
						gif:'image/gif',
						jpg:'image/jpeg'
					},
					_urlHandlers = [],
					_minAllowedModifiedDate = _params.freshBuild == 'true' ? Uize.now () : -Infinity,
					_sourcePath = _params.sourcePath,
					_tempPath = _params.tempPath,
					_builtPath = _params.builtPath
					_memoryPath = 'memory'
				;

				function _registerUrlHandler (_urlHandler) {
					_urlHandlers.push (_urlHandler);
				}

				function _isUnderMemoryPath (_path) {
					return Uize.String.startsWith (_path,_memoryPath + '/');
				}

				function _isUnderBuiltPath (_path) {
					return Uize.String.startsWith (_path,_builtPath + '/');
				}

				function _sourcePathFromBuiltPath (_path) {
					return _sourcePath + _path.slice (_builtPath.length);
				}

				function _memoryPathFromBuiltPath (_path) {
					return _memoryPath + _path.slice (_builtPath.length);
				}

				function _getTitleFromFilename (_filename) {
					return _filename.match (/(.*)\.[^\.]*$/) [1].replace (/-/g,' ');
				}

				/*** abstractions of various methods of the file system service to support object storage ***/
					var _objectCache = {};

					function _writeFile (_params) {
						var _path = _params.path;
						_isUnderMemoryPath (_path)
							? (
								_objectCache [_path] = {
									contents:_params.contents,
									modifiedDate:new Date
								}
							)
							: _fileSystem.writeFile (_params)
						;
					}

					function _readFile (_params) {
						var _path = _params.path;
						return (
							_isUnderMemoryPath (_path)
								? (_objectCache [_path] || _sacredEmptyObject).contents
								: _fileSystem.readFile (_params)
						);
					}

					function _getModifiedDate (_params) {
						var _path = _params.path;
						return (
							_isUnderMemoryPath (_path)
								? (_objectCache [_path] || _sacredEmptyObject).modifiedDate
								: _fileSystem.getModifiedDate (_params)
						);
					}

					function _pathExists (_params) {
						var _path = _params.path;
						return _isUnderMemoryPath (_path) ? !!_objectCache [_path] : _fileSystem.pathExists (_params);
					}

				/*** handler for source files ***/
					_registerUrlHandler ({
						description:'Short-circuit handling for source files',
						urlMatcher:function (_urlParts) {
							return Uize.String.startsWith (_urlParts.folderPath,_sourcePath);
						}
					});

				/*** handler for the home page ***/
					_registerUrlHandler ({
						description:'Homepage',
						urlMatcher:function (_urlParts) {
							return _urlParts.pathname == _builtPath + '/index.html';
						},
						builderInputs:function (_urlParts) {
							return {template:_memoryPathFromBuiltPath (_urlParts.pathname) + '.jst'};
						},
						builder:function (_inputs) {
							return _readFile ({path:_inputs.template}) ({
								latestNews:[{title:'FOO',description:'BAR'}]
							});
						}
					});

				/*** handler for the directory page ***/
					_registerUrlHandler ({
						description:'Directory page',
						urlMatcher:function (_urlParts) {
							return _urlParts.pathname == _builtPath + '/directory.html';
						},
						builderInputs:function (_urlParts) {
							return {template:_memoryPathFromBuiltPath (_urlParts.pathname) + '.jst'};
						},
						builder:function (_inputs) {
							return _readFile ({path:_inputs.template}) ();
						}
					});

				/*** handler for example index pages ***/

				/*** handler for in-memory compiled JST templates ***/
					_registerUrlHandler ({
						description:'In-memory compiled JST templates',
						urlMatcher:function (_urlParts) {
							return _isUnderMemoryPath (_urlParts.pathname) && _urlParts.fileType == 'jst';
						},
						builderInputs:function (_urlParts) {
							return {sourceJst:_sourcePath + _urlParts.pathname.slice (_memoryPath.length)};
						},
						builder:function (_inputs) {
							var _template = Uize.Template.compile (
								_fileSystem.readFile ({path:_inputs.sourceJst}),
								{result:'full'}
							);
							Uize.require (_template.required);
							return _template.templateFunction;
						}
					});

				/*** handler for SimpleDoc explainers, appendixes, news, etc. ***/
					_registerUrlHandler ({
						description:'Explainers, generated from SimpleDoc files',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								_urlParts.fileType == 'html' &&
								_isUnderBuiltPath (_folderPath) &&
								_fileSystem.pathExists ({
									path:_sourcePathFromBuiltPath (_urlParts.folderPath) + _urlParts.fileName + '.simple'
								})
							);
						},
						builderInputs:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return {
								simpleDoc:_sourcePathFromBuiltPath (_folderPath) + _urlParts.fileName + '.simple',
								simpleDocTemplate:_memoryPathFromBuiltPath (_folderPath) + '~SIMPLE-DOC-TEMPLATE.html.jst'
							};
						},
						builder:function (_inputs) {
							var
								_simpleDocPath = _inputs.simpleDoc,
								_simpleDocUrlPath = _simpleDocPath.slice (_sourcePath.length + 1),
								_buildResult = Uize.Doc.Simple.build ({
									data:_fileSystem.readFile ({path:_simpleDocPath}),
									//urlDictionary:_urlDictionary,
									pathToRoot:Uize.String.repeat (
										'../',
										_simpleDocUrlPath.length -
										_simpleDocUrlPath.replace (/[\/\\]/g,'').length
									),
									result:'full'
								}),
								_contentsTreeItems = _buildResult.contentsTreeItems,
								_contentsTreeItem0 = _contentsTreeItems [0]
							;
							return _readFile ({path:_inputs.simpleDocTemplate}) ({
								title:
									_buildResult.metaData.title ||
									_getTitleFromFilename (Uize.Url.from (_simpleDocPath).file)
										.replace (/(^|\s)[a-z]/g,function (_match) {return _match.toUpperCase ()}),
								description:
									(
										_contentsTreeItem0 &&
										(_contentsTreeItem0.description || (_contentsTreeItem0.items [0] || {}).description)
									) || '',
								body:_buildResult.html
							});
						}
					});

				/*** handler for scrunched JavaScript modules ***/

				/*** handler for scrunched compiled JST modules ***/

				/*** handler for scrunched JavaScript library modules ***/

				/*** handler for module reference docs ***/
					_registerUrlHandler ({
						description:'Module reference pages',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								_urlParts.folderPath == _builtPath + '/reference/' &&
								_fileSystem.pathExists ({path:_sourcePath + '/js/' + _urlParts.fileName + '.js'})
							);
						},
						builderInputs:function (_urlParts) {
							return {sourceCode:_sourcePath + '/js/' + _urlParts.fileName + '.js'};
						},
						builder:function (_inputs) {
							return 'Foo';
						}
					});

				/*** handler for module source code pages ***/
					var _modulesSourceCodePagesPath = '/reference/source-code/';
					_registerUrlHandler ({
						description:'Module source code pages',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								_urlParts.folderPath == _builtPath + _modulesSourceCodePagesPath &&
								_fileSystem.pathExists ({path:_sourcePath + '/js/' + _urlParts.fileName + '.js'})
							);
						},
						builderInputs:function (_urlParts) {
							return {
								sourceCode:_sourcePath + '/js/' + _urlParts.fileName + '.js',
								sourceCodeTemplate:_memoryPath + _modulesSourceCodePagesPath + '~SOURCE-CODE-TEMPLATE.html.jst'
							};
						},
						builder:function (_inputs) {
							var
								_sourceCode = _inputs.sourceCode,
								_sourceFileName = Uize.Url.from (_sourceCode).file
							;
							return _readFile ({path:_inputs.sourceCodeTemplate}) ({
								sourceFilename:_sourceFileName,
								title:_getTitleFromFilename (_sourceFileName),
								body:_fileSystem.readFile ({path:_sourceCode})
							});
						}
					});

				/*** handler for example source code pages ***/
					var _examplesSourceCodePagesPath = '/examples/source-code/';
					_registerUrlHandler ({
						description:'Example source code pages',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								_urlParts.folderPath == _builtPath + _examplesSourceCodePagesPath &&
								_fileSystem.pathExists ({path:_sourcePath + '/examples/' + _urlParts.file})
							);
						},
						builderInputs:function (_urlParts) {
							return {
								sourceCode:_sourcePath + '/examples/' + _urlParts.file,
								sourceCodeTemplate:_memoryPath + _examplesSourceCodePagesPath + '~SOURCE-CODE-TEMPLATE.html.jst'
							};
						},
						builder:function (_inputs) {
							var
								_sourceCode = _inputs.sourceCode,
								_sourceFileName = Uize.Url.from (_sourceCode).file,
								_sourceFileText = _fileSystem.readFile ({path:_sourceCode})
							;
							return _readFile ({path:_inputs.sourceCodeTemplate}) ({
								sourceFilename:_sourceFileName,
								title:_sourceFileText.match (
									/<title>(.+?)\s*\|\s*JavaScript\s+(?:Tools|Examples)\s*(\|.*?)?<\/title>/
								) [1],
								body:_sourceFileText
							});
						}
					});

				/*** handler for SimpleData derived pages ***/
					_registerUrlHandler ({
						description:'SimpleData derived pages',
						urlMatcher:function (_urlParts) {
							var _pathname = _urlParts.pathname;
							return (
								_isUnderBuiltPath (_urlParts.pathname) &&
								_fileSystem.pathExists ({path:_sourcePathFromBuiltPath (_pathname) + '.jst'}) &&
								_fileSystem.pathExists ({path:_sourcePathFromBuiltPath (_pathname) + '.simpledata'})
							);
						},
						builderInputs:function (_urlParts) {
							var _pathname = _urlParts.pathname;
							return {
								jstTemplate:_memoryPathFromBuiltPath (_pathname) + '.jst',
								simpleData:_sourcePathFromBuiltPath (_pathname) + '.simpledata'
							};
						},
						builder:function (_inputs) {
							return _readFile ({path:_inputs.jstTemplate}) (
								Uize.Data.Simple.parse ({
									simple:_fileSystem.readFile ({path:_inputs.simpleData}),
									collapseChildren:true
								})
							);
						}
					});

				/*** handler for widgets-to-go widget pages ***/

				/*** handler for source compiled JST modules ***/
					var _jsJstRegExp = /\.js\.jst$/i;
					_registerUrlHandler ({
						description:'Source JST modules, generated from .js.jst files',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								Uize.String.endsWith (_urlParts.file,'.js.jst') &&
								Uize.String.startsWith (_folderPath,_builtPath) &&
								_fileSystem.pathExists ({path:_sourcePathFromBuiltPath (_urlParts.pathname) + '.jst'})
							);
						},
						builderInputs:function (_urlParts) {
							return {jstSource:_sourcePathFromBuiltPath (_urlParts.pathname) + '.jst'};
						},
						builder:function (_inputs) {
							var _jstSource = _inputs.jstSource;
							return Uize.Templates.JstModule.process ({
								moduleName:Uize.Url.from (_jstSource).file.replace (_jsJstRegExp,''),
								compiledTemplate:Uize.Template.compile (
									_fileSystem.readFile ({path:_jstSource}),
									{result:'full'}
								)
							});
						}
					});

				/*** handler for static assets ***/
					_registerUrlHandler ({
						description:'Fallback handler for static assets',
						urlMatcher:function (_urlParts) {
							var _folderPath = _urlParts.folderPath;
							return (
								Uize.String.startsWith (_folderPath,_builtPath) &&
								_fileSystem.pathExists ({path:_sourcePathFromBuiltPath (_urlParts.pathname)})
							);
						},
						builderInputs:function (_urlParts) {
							return {sourcePath:_sourcePathFromBuiltPath (_urlParts.pathname)};
						}
					});

				function _ensureFileCurrent (_url) {
					/*** remove query from URL (since we don't handle this on the server side yet) ***/
						var _queryPos = _url.indexOf ('?');
						if (_queryPos > -1)
							_url = _url.slice (0,_queryPos)
						;

					/*
						- how handlers are used...
							- handler is picked by going through all the handlers in sequence, until a handler matches the URL path
							- handlers are recursive, so for every handler that maps a requested path to a source path, the remaining handlers are evaluated to see if any apply to the source path
								- so, for example, a handler for scrunched JavaScript modules can rely on a handler for compiled JST modules, so that if a .jst source file is modified, requesting the scrunched compiled JST module will result in the .jst source file first being compiled to a JST source module, and then being scrunched to a scrunched JST module
							- handlers can also register build needs
							- handlers can have multiple inputs
								- a handler for a SimpleDoc explainer HTML URL will have at least two direct inputs...
									- the .simple source file
									- the .jst JavaScript template used to build the HTML file
							- some handlers may need to check multiple files to determine if the current built result is current
								- for example, a handler for a JavaScript module doc HTML page will need to check that none of the modules along the modules inheritance chain (if it is a class module) have a more recent modified date, since the documentation reflects inherited features for classes

						- needed items can be objects, in memory
							- as objects in memory, needed objects can have a last modified date

						- a JST template can have template modules as dependencies
							- template module dependencies are dependencies for the process of using of such a JST template
							- if one of the template module dependencies is modified since the last build using the JST template, then the last built product of the JST template would need to be rebuilt

						- with a request driven model for build process, for the purpose of performance, any file can have an internal / parsed representation as an object
							- so, for example, a .json file that is built as part of a build process can also be stored in memory as a JavaScript object, so that processes that repeatedly use the .json file as an input can not have to repeatedly parse the
							- all files can be modified through their string or object interfaces
								- if modified through object interface...
									- buffered serialization, buffered writing to file
									- immediate serialization when requested in text form or requested through file interface
									- writing to file can be decoupled from serialization to text, as a consequence of file system service
								- if modified through file interface...
									- immediate parsing when requested in object form
							- to aid in performance, files can be cached in a memory cache system (such as memcache)
					*/
					var
						_urlParts = _Uize_Url.from (_url),
						_matchingHandler
					;
					for (
						var _urlHandlerNo = -1, _urlHandlersLength = _urlHandlers.length, _urlHandler;
						++_urlHandlerNo < _urlHandlersLength;
					) {
						if ((_urlHandler = _urlHandlers [_urlHandlerNo]).urlMatcher (_urlParts)) {
							_matchingHandler = _urlHandler;
							break;
						}
					}
					if (_matchingHandler) {
						var
							_builderInputs = (_matchingHandler.builderInputs || Uize.nop) (_urlParts),
							_path = _urlParts.pathname,
							_mustBuild = !_pathExists ({path:_path}),
							_lastBuiltDate = _mustBuild ? 0 : _getModifiedDate ({path:_path}),
							_builderInput
						;
						for (var _builderInputName in _builderInputs) {
							_ensureFileCurrent (_builderInput = _builderInputs [_builderInputName]);
							_mustBuild || (
								_mustBuild = Math.max (
									_getModifiedDate ({path:_builderInput}),
									_minAllowedModifiedDate
								) > _lastBuiltDate
							);
						}
						if (_mustBuild) {
							var
								_startTime = Uize.now (),
								_builder = _matchingHandler.builder
							;
							_builder
								? _writeFile ({path:_url,contents:_builder (_builderInputs,_urlParts)})
								: _fileSystem.copyFile ({path:Uize.values (_builderInputs) [0],targetPath:_url})
							;
							console.log (
								'BUILT: ' + _url + '\n' +
									'\tduration: ' + (Uize.now () - _startTime) + '\n' +
									'\tbuilder: ' + _matchingHandler.description + '\n' +
									'\tbuilder inputs:\n' +
										Uize.map (
											Uize.keys (_builderInputs),
											function (_key) {return '\t\t' + _key + ': ' + _builderInputs [_key] + '\n'}
										).join ('')
							);
						}
					}
				}

				_http.createServer (
					function (_request,_response) {
						var
							_requestUrl = _builtPath + _request.url,
							_fileContents
						;
						_ensureFileCurrent (_requestUrl);
						try {
							var _urlParts = _Uize_Url.from (_requestUrl);
							_fileContents = _fileSystem.readFile ({path:_urlParts.pathname,encoding:'buffer'});
							_response.writeHead (200,{'Content-Type':_mimeTypes [_urlParts.fileType]});
						} catch (_error) {
							console.log ('404: ' + _requestUrl);
							_fileContents = '404';
							_response.writeHead (404,{'Content-Type':'text/html'});
						}
						_response.end (_fileContents);
					}
				).listen (_port,_host);

				console.log ('Server running at http://' + _host + ':' + _port + '/');
				/*?
					Static Methods
						UizeSite.Build.WebServer.perform
							SYNTAX
							.............................................
							UizeSite.Build.WebServer.perform (paramsOBJ);
							.............................................

							Parameters
								sourcePath
									A string, specifying the folder path for the site's source code.

								tempPath
									A string, specifying the folder path for temporary files created while building files for the site.

								builtPath
									A string, specifying the folder path for the built files of the site.
				*/
			};

		return _package;
	}
});

