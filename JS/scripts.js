document.getElementById('gameOver').style.visibility = 'hidden'; //HIDE 'GAME OVER' TEXT
document.getElementById('overlay').style.visibility = 'hidden'; //HIDE 'GAME OVER' OVERLAY

//SETTING GLOBAL SOUND VARIABLES
        var audio = new Audio('assets/ticking.mp3');
        audio.loop = false;
        var gameOver = new Audio('assets/gameover.mp3');
        gameOver.loop = false;
        var gunshot = new Audio('assets/gunshot.mp3');
        gunshot.loop = false;

//COUNTDOWN TIMER
var seconds_left = 5;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;
    
//IF SHOW 1:00 ON 60 SECONDS
    if (seconds_left >= 60) {
      document.getElementById('timer_div').innerHTML = '1:00'
    }

//TICKING SOUND BELOW 10 SECONDS
    if (seconds_left <= 10) {
        audio.play();
    }

//GUNSHOT SOUND ON CLICK WHILE TIMER IS RUNNING
    if (seconds_left > 0){
      $( document.body ).click(function() {
        gunshot.play()
      });
    }

//WHEN THE TIMER RUNS OUT:
    if (seconds_left <= 0){
        document.getElementById('timer_div').innerHTML = 'Time Up!';
        clearInterval(interval); //CHANGE TIMER TEXT TO 'TIME UP!'
        document.getElementById('gameOver').style.visibility = 'visible'; //SHOW 'GAME OVER' TEXT
        document.getElementById('togglemusic').style.visibility = 'hidden'; //HIDE MUSIC TOGGLE
        document.getElementById('overlay').style.visibility = 'visible'; //SHOW 'GAME OVER' OVERLAY
        document.getElementById('gun_div').style.visibility = 'hidden'; //HIDE GUN
        document.getElementsById('pig').style.visibility = 'hidden'; //HIDE PIG - ISN'T WORKING
        bgMusic.pause(); //STOP MUSIC
        audio.pause(); //STOPTICKING SOUND
        gameOver.play(); //PLAY GAME OVER MUSIC

        $( document.body ).click(function() { //STOP GUNSHOTS
          gunshot.pause()
        });
    }
}, 1000);

//BACKGROUND MUSIC TOGGLE
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

//MOVING PIGS
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