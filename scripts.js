const video = document.querySelector("video");
const playButton = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");

playButton.addEventListener("click", function(){
    
    if (video.paused) {
        video.play();
        playButton.innerHTML = "&#10074;&#10074;";
    } else {
        video.pause();
        playButton.innerHTML = "&#9658;";
    }
    
});
