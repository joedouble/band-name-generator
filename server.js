var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var getRandomWord = require("./lib/getRandomWords.js");
var Adjectives = require("./lib/adjectives.js");
var adjectives = new Adjectives();
var Verbs = require("./lib/verbs.js");
var verbs = new Verbs();
var Nouns = require("./lib/nouns.js");
var nouns = new Nouns();

app.listen(port, function(){
  console.log('Server started on port ' + port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/app/"));

app.get("/adjectives", function(req, res){
  res.json(getRandomWord(adjectives));
});

app.get("/verbs", function(req, res){
  res.json(getRandomWord(verbs));
});

app.get("/nouns", function(req, res){
  res.json(getRandomWord(nouns));
});

app.post('/adjectives', function(req, res) {
  var word = postWord(req.body.word, adjectives);
  res.json(word);
});

app.post('/verbs', function(req, res) {
  var word = postWord(req.body.word, verbs);
  res.json(word);
});

app.post('/nouns', function(req, res) {
  var word = postWord(req.body.word, nouns);
  res.json(word);
});

function postWord (word, wordObject){
  if(wordObject.hasOwnProperty(word)){
    return {msg: "We already have your word, " + word + ", in our list."};
  }
  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for adding " + word + " to our word list."};
  };

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/app/index.html");
});


