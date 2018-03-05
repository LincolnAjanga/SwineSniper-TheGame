document.getElementById('gameOver').style.visibility = 'hidden';
        var audio = new Audio('assets/ticking.mp3');
        audio.loop = false;
var seconds_left = 12;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 10) {
        audio.play();
    }


    if (seconds_left <= 0){
        document.getElementById('timer_div').innerHTML = 'Time Up!';
        clearInterval(interval);
        document.getElementById('gameOver').style.visibility = 'visible';
        document.getElementById('togglemusic').style.visibility = 'hidden';
        bgMusic.pause()
        audio.pause()
    }
}, 1000);

var bgMusic = document.getElementById("bgMusic");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    bgMusic.pause()
  } else {
    bgMusic.play();
  }
};
bgMusic.onplaying = function() {
  isPlaying = true;
};
bgMusic.onpause = function() {
  isPlaying = false;
};


$(document).mousemove(function(e) {
    $('#gun').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});

// document.getElementById('gameOver').style.visibility = 'hidden';
// var seconds_left = 11;
// var interval = setInterval(function() {
//     document.getElementById('timer_div').innerHTML = --seconds_left;

//     if (seconds_left <= 10) {
//         var ticking = new Audio('assets/ticking.mp3');
//         audio.loop = false;
//         audio.play();
//     }

//     if (seconds_left <= 0){
//         document.getElementById('timer_div').innerHTML = 'Time Up!';
//         clearInterval(interval);
//         document.getElementById('gameOver').style.visibility = 'visible';
//         document.getElementById('togglemusic').style.visibility = 'hidden';
//         bgMusic.pause()
//         ticking.pause()
//     }
// }, 1000);

// var bgMusic = document.getElementById("bgMusic");
// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     bgMusic.pause()
//   } else {
//     bgMusic.play();
//   }
// };
// bgMusic.onplaying = function() {
//   isPlaying = true;
// };
// bgMusic.onpause = function() {
//   isPlaying = false;
// };