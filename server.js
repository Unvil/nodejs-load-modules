/**
* Author: Claudio A. Marrero
* Email: cmarrero01@gmail.com
* This is a test project that load 2 controllers and
* boths see with each other, and you can call any function of each controller.
*/

//File module
var fs = require('fs');

//Load config folder (database, loads, routes, etc)
var load = ['./config/'];

//Make an object with every native module and var that I want to share with all files
var params = {
	fs:fs,
	load:load
};

//Load the first config modules
var loader = require('./load.js')(params);

//Load every module that the config/load.js have into they array.
var Dependencies = loader.init();
console.log(Dependencies);
//Now, you can use every module, controller or everything that you want.
Dependencies.controller_a.init();