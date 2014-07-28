module.exports = function(params){

	if(!params.Dependencies){
		console.log('controller_b Loaded witouth coinding relation');
		return;
	}

	console.log('controller_b Loaded with coinding relation');

	var ControllerB = (function(){

		function init(){
			console.log('Initialization of Controller B');
		}

		return {
			init:init
		}
	})();

	return ControllerB;
		
};