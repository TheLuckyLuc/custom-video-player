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

speed.addEventListener("change", function(){
    video.playbackRate = speed.value;
});

volume.addEventListener("change", function(){
    video.volume = volume.value;
});
