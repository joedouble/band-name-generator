var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Server started on port ' + port);
});

var adjectives = [
  "Beautiful",
  "Creamy",
  "Green",
  "Slimey",
  "Sick",
  "Adorable",
  "Bumpy",
  "Purple",
  "Flavorful",
  "Mega"
]

app.get("/adjectives", function(req, res){
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  res.json({ word : adjectives[randomIndex] });
})

var verbs = [
  "Prevent",
  "Knot",
  "Pour",
  "Smile",
  "Blush",
  "Complain",
  "Identify",
  "Search",
  "Bang",
  "Scratch"
]

app.get("/verbs", function(req, res){
  var randomIndex = Math.floor(Math.random() * verbs.length);
  res.json({ word : verbs[randomIndex] });
})
var nouns = [
  "Burn",
  "Carpenter",
  "Goldfish",
  "Grandmother",
  "Nurse",
  "Comic",
  "Game",
  "Toilet",
  "Bacon",
  "Eyelash"
]

app.get("/nouns", function(req, res){
  var randomIndex = Math.floor(Math.random() * nouns.length);
  res.json({ word : nouns[randomIndex] });
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/app/index.html");
});

app.use(express.static(__dirname + "/app/"));
