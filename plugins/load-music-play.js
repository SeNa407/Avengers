var count = 0;
var buttonPlayPause = document.getElementsByClassName(
  "btn btn-header btn-play"
);
var innere = buttonPlayPause.textContent;

let play = function () {
  if (count == 0) {
    count = 1;
    document.getElementById("audio").play();
    innere = "&#10074 &#10074";
  } else {
    count = 0;
    document.getElementById("audio").pause();
    innere = "&#10074 &#10074";
  }
};
