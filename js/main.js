$(document).ready(function() {

  $(".col-sm-4").click(function(){

   var choice = $(this).attr('id'); // or var clickedBtnID = this.id
   if (choice === 'turtle') {
     $("#main").hide();
     $(".turtlePage").show();
   }
   else if (choice === 'snake') {
     $("#main").hide();
     $(".snakePage").show();
   }
   else if (choice === 'insect')
   {
     $("#main").hide();
     $(".insectPage").show();
   }
   else {
     return;
   }
 });
});













//
//
//
// $(document).ready(function() {
//
//   var age = parseInt(prompt("How old arte you"));
//
//   if (age >= 18) {
//     $("#intro").hide();
//     $('#eighteen').show();
//   } else {
//     $('#notEighteen').show();
//   };
// });
//   // $(".NO").click(function(){
