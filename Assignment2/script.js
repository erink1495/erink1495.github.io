const video = document.querySelector("#custom-video-player");

video.removeAttribute("controls");
// Add other functionalities here
const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const repeatImg = document.querySelector("#repeat-img");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
//video plays on loop and audio plays
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    video.play();
    video.loop=true
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    video.pause()
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// playPauseBtn.addEventListener("click", togglePlayPause);
function updateProgressBar() {
    const value = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = value + "%";
  }
  const repeatBtn = document.querySelector("#repeat-btn")

let timer = 0;
const output = document.getElementById("output");

repeatBtn.addEventListener("click", function(){   
    if (timer == 0) {
        console.log('button was off');
        //start loop
        timer = setInterval(loopAudio, 50);        
    }
    else {
        console.log('button was on');
        //stop loop
        clearInterval(timer);
        timer = 0;
    }
});

function loopAudio() {
    audio.loop=true
}
const volumeSlider = document.getElementById("volume-slider");
const volumeDisplay = document.getElementById("volume-display");

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
    updateVolumeDisplay(); 
  });

  function updateVolumeDisplay() {
    volumeDisplay.textContent = `Volume: ${Math.floor(player.volume * 100)}%`;
  }
    var skipToStartBtn = document.getElementById("skip-start-btn");
    if (currentTime = 0) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }