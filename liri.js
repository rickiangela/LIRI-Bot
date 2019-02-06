require("dotenv").config();

var keys = require("./keys.js");

var command = process.argv[2];
var object = process.argv[3];

// console.log(command);
// console.log(object);

var Spotify = require('node-spotify-api');
var input = process.argv;
var request = require('request');
var fs = require('fs');
var axios = require("axios");
var moment = require("moment");



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

function concertThis(band) {
    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function (response) {

                console.log("Venue Name: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city);
                console.log("Date: " + moment(response.data[i].datetime).format('MMMM Do YYYY'));
        });
}

function spotifyThisSong(song) {

}

function movieThis(movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
        function (response) {
            
            console.log("Title: " + response.data.Title);
            console.log("Released: " + response.data.Year);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
            console.log("Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);


        }

    );
}

function doWhatItSays() {
    console.log("This will run 'I Want It That Way'.");
}