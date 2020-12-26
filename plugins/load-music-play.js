var count = 0;
var buttonPlayPause = document.querySelector(".btn-play");

let play = function () {
  if (count == 0) {
    count = 1;
    document.getElementById("audio").play();
    buttonPlayPause.innerHTML = "&#10074 &#10074";
  } else {
    count = 0;
    document.getElementById("audio").pause();
    buttonPlayPause.innerHTML = "&#9658";
  }
};
