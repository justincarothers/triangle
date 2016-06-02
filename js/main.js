//
// var triangleTracker = function (side1, side2, side3) {
//   var sideOne = parseInt(side1).val();
//   var sideTwo = parseInt(side2).val();
//   var sideThree = parseInt(side3).val();
//
//   var triangleCheck = (sideOne, sideTwo, sideThree)
//
//
// };

// if ((sideOne + sideTwo) <= sideThree) {
//   alert ("That is not a triangle")
// }





$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    event.preventDefault();

    var side1 = $('input#side1').val();
    var side2 = $('input#side2').val();
    var side3 = $('input#side3').val();
    var triangle = triangleTracker(side1, side2, side3);

    }

  });
});
//
// if (sideOne === sideTwo && sideTwo === sideThree) {
//   alert("EQUILLATERAL TRIANGLE");
// } else if ((sideOne !=== sideTwo ) && (sideOne !=== sideThree)) {
//   alert("SCALENE TRIANGLE");
// } else if ((sideOne + sideTwo) <= sideThree) {
//
// }






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
