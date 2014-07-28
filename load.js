module.exports = function(params){

	//No need comments, this is the magic code.

	var Loader = (function(){

		function Init(args){
			
			var modules = params.load;
			
			if(!modules.length){
				return;
			}

			for(var i = 0; i < modules.length; i++){
				load(modules[i],params);	
			}
			
			//Load for the first time every file that I have on config/load.js
			loadAll(params);
			
			//Load again all files that I have on config/load.js but this time, with a reference to every file of that list.
			return loadAll(params);
		}

		function load(path,relation){
			params.fs.readdirSync(path).forEach(function(file) {
				var moduleName = file.substr(0, file.indexOf('.'));
				exports[moduleName] = require('./' + path + moduleName)(relation);
			});
		}

		function loadAll(relation){	

			if(!exports.load){
				return;
			}

			if(!exports.load.length){
				return;
			}

			for(var i = 0; i < exports.load.length; i++){
				load(exports.load[i],relation);	
			}

			return params.Dependencies = exports;
		}

		return {
			init:Init
		}

	})();

	return Loader;
	
};