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
    $("form").trigger("reset");
  });

  $("#submitVerb").on("submit", function(e){
    e.preventDefault();
    var verbs = $("input[name=verb").val();
    var verbPost;
    if (verbs) {
      verbPost = {word : verbs};
      $.post("verbs", verbPost, function(response){
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }
    $("form").trigger("reset");
  });

  $("#submitNoun").on("submit", function(e){
    e.preventDefault();
    var nouns = $("input[name=noun").val();
    var nounPost;
    if (nouns) {
      nounPost = {word : nouns};
      $.post("nouns", nounPost, function(response){
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }
    $("form").trigger("reset");
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
    $('#bandName').css('textTransform', 'capitalize');
  })
});
