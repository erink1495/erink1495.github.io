window.onload = function() {
    startMovingImages();

    // Add hover events for Jelly2 and Jelly3
    var jelly2 = document.getElementById("Jelly2");
    var jelly2Text = document.getElementById("Jelly2-text");
    var jelly3 = document.getElementById("Jelly3");
    var jelly3Text = document.getElementById("Jelly3-text");

    jelly2.addEventListener("mouseover", function() {
        jelly2Text.style.display = "block";
    });

    jelly2.addEventListener("mouseout", function() {
        jelly2Text.style.display = "none";
    });

    jelly3.addEventListener("mouseover", function() {
        jelly3Text.style.display = "block";
    });

    jelly3.addEventListener("mouseout", function() {
        jelly3Text.style.display = "none";
    });

    // Add hover events for Jelly6 and Jelly7 to play audio
    var jelly6 = document.getElementById("Jelly6");
    var jelly6Audio = document.getElementById("jelly6-audio");
    var jelly7 = document.getElementById("Jelly7");
    var jelly7Audio = document.getElementById("jelly7-audio");

    jelly6.addEventListener("mouseover", function() {
        jelly6Audio.play();
    });

    jelly6.addEventListener("mouseout", function() {
        jelly6Audio.pause();
        jelly6Audio.currentTime = 0; // Reset the audio to the beginning
    });

    jelly7.addEventListener("mouseover", function() {
        jelly7Audio.play();
    });

    jelly7.addEventListener("mouseout", function() {
        jelly7Audio.pause();
        jelly7Audio.currentTime = 0; // Reset the audio to the beginning
    });
};

// this makes the Jellyfish move at random. It increases engagement and makes it more realistic and fun.
function moveImage(image) {
    var maxX = image.parentElement.clientWidth - image.width;
    var maxY = image.parentElement.clientHeight - image.height;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    image.style.left = newX + "px";
    image.style.top = newY + "px";
}

function startMovingImages() {
    var imageIds = ["Jelly1", "Jelly2", "Jelly3", "Jelly4", "Jelly5", "Jelly6", "Jelly7"];

    imageIds.forEach(function(id) {
        var img = document.getElementById(id);
        setInterval(function() {
            moveImage(img);
        }, 2000);
    });
}

//this plays the ambiant sounds. It was added to create a more interactive and immersive experience for the user

const audio = document.getElementById('ambiance-audio');
const button = document.getElementById('audio-btn-mute');
let isMuted = false;

button.addEventListener('click', function() {
    if (isMuted) {
        audio.play();
        button.innerHTML = '<img id="audio-img" src="https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000" alt="Audio Mute" width="24" height="24">';
    } else {
        audio.pause();
        button.innerHTML = '<img id="audio-img" src="https://img.icons8.com/?size=100&id=91635&format=png&color=000000" alt="Audio Unmute" width="24" height="24">';
    }
    isMuted = !isMuted;
});