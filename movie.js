'use strict'

function getMovie(movieTitle){
	var request = require('request');

	request('http://www.omdbapi.com/?t=' + movieTitle, function (error, response, body) {
		
		var movieParse = JSON.parse(body);
		console.log(movieParse);
		console.log("\n");
	});
	
};
//getMovie("Jaws");

module.exports = getMovie;
	

	//console.log('error:', error);
	//console.log('statusCode:', response&&response.statusCode);
	//console.log('body:', body);