module.exports = function(params){

	if(!params.Dependencies){
		console.log('Controller A is Loaded witouth coinding relation');
		return;
	}

	console.log('Controller A Loaded with coinding relation');

	var ControllerA = (function(){

		function init(){
			console.log('Initialization Controller A');
			//This is the magic, I can call the controller_b in everywhere that I want.
			params.Dependencies.controller_b.init();
		}

		return {
			init:init
		}
	})();

	return ControllerA;
		
};