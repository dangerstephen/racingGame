var finishLine = 900;
var startLine = 0;
var $boat1 = $('.boat1');
var $boat2 = $('.boat2');
var boat1Score = 0;
// $('.body').append(boat1Score);
var boat2Score = 0;
// $('.body').append(boat2Score);

$('.btn-primary').on('click', function(event) {
    $('.boat1').css('left', '0');
    $('.boat2').css('left', '0');
})
$(document).keydown(function(e) {
    if (e.keyCode === 81) {
        $('.boat1').css('left', '+=20px');
        var boat1 = $('.boat1').css('left');
        if (parseInt($boat1.css('left'), startLine) > finishLine) {
            alert("YAY! Go Boat 1!");
            $(".boat1Score").html(boat1Score += 1);
        }
    }
    if (e.keyCode === 80) {
        $('.boat2').css('left', '+=20px');
        var boat2 = $('.boat2').css('left');
        if ((parseInt($boat2.css('left'), startLine) > finishLine)) {
            alert("Congrats boat 2, you won!");
            $(".boat2Score").html(boat2Score += 1);
        }
    }
});
