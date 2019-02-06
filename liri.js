require("dotenv").config();

var keys = require("./keys.js");

var command = process.argv[2];
var object = process.argv[3];

// console.log(command);
// console.log(object);

var Spotify = require("node-spotify-api");
var input = process.argv;
var request = require("request");
var fs = require('fs');
var axios = require("axios");
var moment = require("moment");

// console.log(keys.spotifyID);
// console.log(keys.spotifySecret);
// console.log(keys.ombd);
// console.log(keys.bandsInTown);

switch (command) {
    case "concert-this":
    concertThis(object);
    break;

    case "spotify-this-song":
    spotifyThisSong(object);
    break;

    case "movie-this":
    movieThis(object);
    break;

    case "do-what-it-says":
    doWhatItSays();
	break;
}

function concertThis(band){
    console.log("You picked the band " + band);
}

function spotifyThisSong(song) {
    console.log("You picked the song " + song);
}

function movieThis(movie) {
    console.log("You picked the movie " + movie);
}

function doWhatItSays() {
    console.log("This will run 'I Want It That Way'.");
}