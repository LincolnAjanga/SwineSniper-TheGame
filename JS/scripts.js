document.getElementById('gameOver').style.visibility = 'hidden';
var seconds_left = 60;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'Time Up!';
        clearInterval(interval);
        document.getElementById('gameOver').style.visibility = 'visible';
    }
}, 1000);

<script type="text/javascript">
 $(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
   ready: function () {
    $(this).jPlayer("setMedia", {
     m4a: "/media/mysound.mp4",
     oga: "/media/mysound.ogg"
    });
   },
   swfPath: "/js",
   supplied: "m4a, oga"
  });
 });
</script>
<div id="jquery_jplayer_1"></div>
<div id="jp_container_1">
 <a href="#" class="jp-play">Play</a>
 <a href="#" class="jp-pause">Pause</a>
</div>