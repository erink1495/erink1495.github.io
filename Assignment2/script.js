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
    //The loop of the video increases the chances of less distraction. Less distraction during studying is ideal.
    video.loop=true
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    video.pause()
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// playPauseBtn.addEventListener("click", togglePlayPause);
//Play bar follows the music rather than the video. The bar was kept from the original code, as this is helps the user know where they are in the song, and thematically worked well with the aesthetic,

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
/*The volume control to help users pick the desired volume
Volume control helps users easily adjust volume that is comfortable for their ears
The repeat button was added so the user doesn't have to continually press the button every time they want to replay the song. The repeat button would make it convenient for the user, and would cause them less distractions while studying. 
The volume bar also allows the user to put the audio on mute if needed to, as pulling the audio all the way back would ‘mute’ it. */

const volumeSlider = document.getElementById("volume-slider");
const volumeDisplay = document.getElementById("volume-display");

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
    updateVolumeDisplay(); 
  });

  function updateVolumeDisplay() {
    volumeDisplay.textContent = `Volume: ${Math.floor(player.volume * 100)}%`;
  }
  /*The skip to start button was added as this would be convenient for the user. The user could take the audio back to the beginning, instead of waiting for the audio to play all the way though. */

    var skipToStartBtn = document.getElementById("skip-start-btn");
    if (currentTime = 0) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }