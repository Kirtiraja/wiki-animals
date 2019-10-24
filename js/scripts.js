


$(document).ready(function() {
  $("form#animals").submit(function(event) {
    event.preventDefault();
    var panda = $("input:radio[name=animal]:checked").val();
    var tahr = $("input:radio[name=animal]:checked").val();
    var leopard = $("input:radio[name=animal]:checked").val();
    console.log(panda, tahr, leopard);

    if (panda === "panda") {
      $(".panda-info").show();
      $(".tahr-info, .leopard-info").hide();
    } else if (tahr === "tahr") {
    $(".tahr-info").show();
      $(".panda-info, .leopard-info").hide();
    } else  {
    $(".leopard-info").show();
    $(".panda-info, .tahr-info").hide();
    }

});
});
