var mysong = document.getElementById("mysong");
var icon = document.getElementById("play");

play.onclick = function(){
    if (mysong.paused) {
        mysong.play();
        icon.src = "pause.svg";
    } else {
        mysong.pause();
        icon.src = "play.svg";
    }
}