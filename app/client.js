$(function(){

  $("form").on("submit", function(e){
    e.preventDefault();
  });

  $("#submitAdj").on("submit", function(e){
    e.preventDefault();

    var adjectives = $("input[name=adjective").val();
    var adjPost;
    if (adjectives) {
      adjPost = {word : adjectives};
      $.post("adjectives", adjPost, function(response){
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
  });

  $("#submitVerb").on("submit", function(e){
    e.preventDefault();
    var verbs = $("input[name=verb").val();
    var verbPost;
    if (verbs) {
      verbPost = {word : verbs};
      console.log(verbPost)
      $.post("verbs", verbPost, function(response){
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }
  });

  $("#submitNoun").on("submit", function(e){
    e.preventDefault();
    var nouns = $("input[name=noun").val();
    var nounPost;
    if (nouns) {
      nounPost = {word : nouns};
      console.log(nounPost)
      $.post("nouns", nounPost, function(response){
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }
  });

  $("#bandNameButton").on("click", function(){
    $.get("/adjectives", function(data) {
    $("#adjective").html(data.word);
    });
    $.get("/verbs", function(data) {
    $("#verb").html(data.word);
    });
    $.get("/nouns", function(data) {
    $("#noun").html(data.word);
    });
  })
});
