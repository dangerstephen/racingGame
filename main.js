// //test to see if JS is linked
// console.log("JavaScript is connected!");
//
// //Q = 81 P = 80
//
// $(document).keydown(function(e) {
//     if (e.keyCode == 81) {
//         $('.car1').css('left', '+=10');
//     }
//     if (e.keyCode == 80) {
//         $('.car2').css('left', '+=10');
//     }
// });

var finishLine = 1000;
var startLine = 10;
var $boat1 = $('.boat1');
var $boat2 = $('.boat2');

$('.btn-primary').on('click', function(event) {
  document.location.reload(true);
  })

// $(function(){
// var car1 = '<div class="car1"></div>';
// var car2 = '<div class="car2"></div>';
// $('.track').append(car1);
// $('.track').append(car2);

$(document).keydown(function(e) {

      if (e.keyCode == 80) {
          $('.boat1').css('left', '+=10');
          var boat1 = $('.boat1').css('left');
          // checkPosition($player1);
          if(parseInt($boat1.css('left'), 10) > finishLine) {
            alert("Phew! You made it!");
          }
          }

      if(e.keyCode == 81 ) {
      $('.boat2').css('left', '+=10');
      var boat2 = $('.boat2').css('left');
      // checkPosition($player2);
        if((parseInt($boat2.css('left'), 10) > finishLine)) {
          alert("Better luck next time human!");
          // document.getElementById("message").innerHTML = "Better luck next time human!";
        }
      }

 });
