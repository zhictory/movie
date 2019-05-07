const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We're connected!")
});

var movieSchema = new mongoose.Schema({
  title: String,
  watched: Boolean,
  image: String
});

const Movie = mongoose.model("Movie", movieSchema);

exports.Movie = Movie;
