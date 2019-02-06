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
    var spotify = new Spotify(keys.spotify);

    if (!song) { var song = 'thank u, next' };
    spotify.search({ type: 'track', query: song })
        .then(function(response) {
            var songs = response.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log('Artist(s): ' + songs[i].artists.map(getArtistNames));
                console.log('Name: ' + songs[i].name);
                console.log('Preview: ' + songs[i].preview_url);
                console.log('Album: ' + songs[i].album.name);
            };
        });
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
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) throw err;

        var dataArr = data.split(',');
        if (dataArr[0] === '') {
            console.log("The file does not contain a command.");
        } else {
            input(dataArr[0], dataArr[1]);
        };

    });
}