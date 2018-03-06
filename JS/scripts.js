document.getElementById('gameOver').style.visibility = 'hidden';
document.getElementById('overlay').style.visibility = 'hidden';
        var audio = new Audio('assets/ticking.mp3');
        audio.loop = false;
        var gameOver = new Audio('assets/gameover.mp3');
        gameOver.loop = false;
        var gunshot = new Audio('assets/gunshot.mp3');
        gunshot.loop = false;
var seconds_left = 5;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;
    
    if (seconds_left >= 60) {
      document.getElementById('timer_div').innerHTML = '1:00'
    }

    if (seconds_left <= 10) {
        audio.play();
    }

    if (seconds_left > 0){
      $( document.body ).click(function() {
        gunshot.play()
      });
    } //This isn't working

    if (seconds_left <= 0){
        document.getElementById('timer_div').innerHTML = 'Time Up!';
        clearInterval(interval);
        document.getElementById('gameOver').style.visibility = 'visible';
        document.getElementById('togglemusic').style.visibility = 'hidden';
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById('gun_div').style.visibility = 'hidden';
        document.getElementsById('pig').style.visibility = 'hidden';
        bgMusic.pause();
        audio.pause();
        gameOver.play();

        $( document.body ).click(function() {
          gunshot.pause()
        });
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

$(document).ready(function(){
  animateDiv();
  
});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(){
  var newq = makeNewPosition();
  var oldq = $('.a').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  
  $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv();        
  });
  
};

function calcSpeed(prev, next) {
  
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  
  var greatest = x > y ? x : y;
  
  var speedModifier = 0.1;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

}