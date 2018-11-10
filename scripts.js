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

// run this function once the video has fully loaded
video.addEventListener("loadedmetadata", function(){
    duration = 100 / video.duration; // this variable represents the % value that each second of the total video length holds
    changeBar(); // run this function so the progress bar starts at 0% when the page first loads
});

video.addEventListener("click", pausePlay); // add this so the video can be paused/played if you click anywhere on the video screen

playButton.addEventListener("click", pausePlay);

// if the speed bar position is changed, set the video playback speed to the current speed bar value
speed.addEventListener("change", function(){
    video.playbackRate = speed.value;
});

// if the volume bar position is changed, set the video volume to the value of the volume bar
volume.addEventListener("change", function(){
    video.volume = volume.value;
});

// if the forward button is clicked, increase the current time of the video by 25 seconds
forward.addEventListener("click", function(){
    video.currentTime = video.currentTime + 25;
});

// if the back button is clicked, decrease the current time of the video by 10 seconds
backward.addEventListener("click", function(){
    video.currentTime = video.currentTime - 10;
});

video.ontimeupdate = changeBar; // run the changeBar function every time the time of the video updates

// listen for a click on the progress bar
progressBar.addEventListener("click", clickBar);

// function for playing and pausing the video
function pausePlay(){
    // if the video is paused, play it and change the button icon from the arrow, to the pause symbol
    if (video.paused) {
        video.play();
        playButton.innerHTML = "&#10074;&#10074;";
        // do the opposite if the video is already playing
    } else {
        video.pause();
        playButton.innerHTML = "&#9658;";
    }
}

// function to update the progress bar
function changeBar(){
    barWidth = video.currentTime * duration; // takes the current amount of seconds you're on and multipies it by the duration variable that was set earlier - this translates what the current amount of seconds are as a percentage of the total video time

    progress.style.flexBasis = `${barWidth}%`; // sets the flex basis of the progress bar as a percentage
}

// function for clicking the progress bar
function clickBar(event) {
    const position = (event.offsetX / progressBar.offsetWidth) * video.duration; // this will store the number of seconds that you clicked on (by dividing the pixel width you clicked on, with the total pixed width of the bar (giving your percentage) & multiplying that with the total video length)

    video.currentTime = position; // update the current time of the video
}
