document.getElementById('gameOver').style.visibility = 'hidden';
var seconds_left = 5;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'Time Up!';
        clearInterval(interval);
        document.getElementById('gameOver').style.visibility = 'visible';
    }
}, 1000);