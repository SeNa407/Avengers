var count = 0;
var buttonPlayPause = document.getElementsByClassName(
  "btn btn-header btn-play"
);

let play = function () {
  if (count == 0) {
    count = 1;
    document.getElementById("audio").play();
    for (var i = 0; i < buttonPlayPause.length; i++) {
      buttonPlayPause[i].innerHTML = "&#10074 &#10074";
    }
  } else {
    count = 0;
    document.getElementById("audio").pause();
    for (var i = 0; i < buttonPlayPause.length; i++) {
      buttonPlayPause[i].innerHTML = "&#9658";
    }
  }
};
