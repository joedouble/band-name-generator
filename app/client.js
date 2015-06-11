$(function(){
  $("#adjButton").on("click", function(){
    $.get("/adjectives", function(data) {
    $("#adjectives").html(data.word);
    });
  })
});

$(function(){
  $("#verbButton").on("click", function(){
    $.get("/verbs", function(data) {
    $("#verbs").html(data.word);
   });
  })
});

$(function(){
  $("#nounButton").on("click", function(){
    $.get("/nouns", function(data) {
    $("#nouns").html(data.word);
    });
  })
});

