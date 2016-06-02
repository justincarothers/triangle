


$(document).ready(function() {

  var age = parseInt(prompt("How old arte you"));

  if (age >= 18) {
    $("#intro").hide();
    $('#eighteen').show();
  } else {
    $('#notEighteen').show();
  };
});
  // $(".NO").click(function(){
