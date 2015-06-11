$(function(){
  $("button").on("click", function(){
    $.get("/adjectives", function(adjdata) {
    $("#adjectives").html(adjdata.word);
  });
    $.get("/verbs", function(verbdata) {
    $("#verbs").html(verbdata.word);
  });
    $.get("/nouns", function(noundata) {
    $("#nouns").html(noundata.word);
  });
  })
});

