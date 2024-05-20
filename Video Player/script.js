const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo(){
    if (myVideo.paused || myVideo.ended) {
        myVideo.play();
} else {
    myVideo.pause();
}
}