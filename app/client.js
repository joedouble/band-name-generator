$(function(){
  $("#adjButton").on("click", function(){
    $.get("/adjectives", function(adjdata) {
    $("#adjectives").html(adjdata.word);
    });
  })
});

$(function(){
  $("#verbButton").on("click", function(){
    $.get("/verbs", function(verbdata) {
    $("#verbs").html(verbdata.word);
   });
  })
});

$(function(){
  $("#nounButton").on("click", function(){
    $.get("/nouns", function(noundata) {
    $("#nouns").html(noundata.word);
    });
  })
});

