/**
 * An Orchestrate.io client for the Clientize reverse-proxy
 */
;(function() {
	'use strict';

	function ClientizeOrchestrate(promiseMod) {
		if(promiseMod)
			var co = require('./clorchestrate.js')(promiseMod);
		else
			var co = require('./clorchestrate.js')();
		
		return co;		
	};

//	var ClientizeOrchestrate = require('./clorchestrate.js');

	module.exports = ClientizeOrchestrate;
}).call(this);