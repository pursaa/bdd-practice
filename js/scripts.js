$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    //business logic
// var leapYear = function(year) {
//   if (year % 4===0) {
//   return true;
// }else {
//   return false;
// }
// console.log ("leapYear");
//
// };
//user interface logic
var year =parseInt($('input#year').val());
var result = leapYear(year);
$("#result").text(result);


  });
});
