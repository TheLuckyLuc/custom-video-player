const video = document.querySelector("video");
const playButton = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const progress = document.querySelector(".progress__filled");
const progressBar = document.querySelector(".progress");
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

// listen for a click on the progress bar
progressBar.addEventListener("click", clickBar);

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

// function for clicking the progress bar
function clickBar(event) {
    const position = (event.offsetX / progressBar.offsetWidth) * 100; // divide the current pixel width that was clicked on, by the total pixel width of the progress bar & multiply it by 100 to get the percentage

    const time = (position / 100) * video.duration; // grab the percentage number of the clicked position, divide it by 100 * multiply it by the total video duration to get the current amount of seconds that have been clicked on

    video.currentTime = time; // update the current time of the video
    progress.style.flexbasis = `${position}%`; // set the flex percentage to where the bar was clicked
}
