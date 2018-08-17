const video = document.querySelector("video");
const playButton = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

video.addEventListener("click", pausePlay);

playButton.addEventListener("click", pausePlay);

speed.addEventListener("change", function(){
    video.playbackRate = speed.value;
});

volume.addEventListener("change", function(){
    video.volume = volume.value;
});

forward.addEventListener("click", function(){
    video.currentTime = video.currentTime + 25;
});

backward.addEventListener("click", function(){
    video.currentTime = video.currentTime - 10;
});

function pausePlay(){
    if (video.paused) {
        video.play();
        playButton.innerHTML = "&#10074;&#10074;";
    } else {
        video.pause();
        playButton.innerHTML = "&#9658;";
    }
}