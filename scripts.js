const video = document.querySelector("video");
const playButton = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const progress = document.querySelector(".progress__filled");
let duration;
let barWidth;
let flexWidth;

video.addEventListener("loadedmetadata", function(){
    duration = 100 / video.duration;
    changeBar();
});

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

video.ontimeupdate = changeBar;

function pausePlay(){
    if (video.paused) {
        video.play();
        playButton.innerHTML = "&#10074;&#10074;";
    } else {
        video.pause();
        playButton.innerHTML = "&#9658;";
    }
}

function changeBar(){
    barWidth = video.currentTime * duration;
    flexWidth = `${barWidth}%`;
    progress.style.flexBasis = flexWidth;
}
