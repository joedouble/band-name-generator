var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Server started on port ' + port);
});

app.get("/", function(req, res) {
  res.send("Hello Universe!");
});

var quotes = [
  '"I have not failed.  I\'ve just found 10,000 ways that won\'t work." - Thomas Edison.',
  '"No matter where you go, there you are."',
  '"If it is a good idea, go ahead and do it.  It is much easier to apologize than to get permission." - Rear Admiral Grace Hopper, USN, Ph.D'
];

app.get("/quotes", function (req, res){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octopus laugh?",
    punchline: "Ten Tickles" }
];

app.get("/jokes", function(req, res) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

