var movie = require("./movie");

var threeFavoriteMovies = ["Frozen","Happy Gilmore","The Matrix"];
threeFavoriteMovies.forEach(function(film){

	movie(film);
});