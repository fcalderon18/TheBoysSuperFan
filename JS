function homelander() {
  stopSounds();
  stopSelect();
  document.getElementById("b1").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/YR9bpAdUiVs?si=g6VCIq5zGgbdhd-c";
  document.getElementById("h1").play();
}
function Atrain() {
  stopSounds();
  stopSelect();
  document.getElementById("b2").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/BXZXqjXX_6w?si=G2kFI47F9NoVUHVU";
  document.getElementById("a1").play();
}

function Blacknoir() {
  stopSounds();
  stopSelect();
  document.getElementById("b3").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/k5Q8YKU-98A?si=x3MKDI0YwRDa9Vu6";
  document.getElementById("bn1").play();
}

function Billybutcher() {
  stopSounds();
  stopSelect();
  document.getElementById("b4").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/yg5CDrJ_GYw?si=ES35VgzkJsCQy30u";
  document.getElementById("bb1").play();
}
function Hughie() {
  stopSounds();
  stopSelect();
  document.getElementById("b5").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/8a4SDr4vFQ8?si=FtYZrIA0HUPfP1c";
  document.getElementById("hh1").play();
}

function Soldierboy() {
  stopSounds();
  stopSelect();
  document.getElementById("b6").classList.add("selected");
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/li2WDMgHxD0?si=pWmSh9EPfmVkaTv1";
  document.getElementById("sb1").play();
}

function trailer() {
  stopSounds();
  stopSelect();
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/7lco5xEoYSA?si=fsqk2zDdmgwTYhXs";
}

function stopSounds() {
  document.getElementById("h1").pause();
  document.getElementById("h1").currentTime = 0;
  document.getElementById("a1").pause();
  document.getElementById("a1").currentTime = 0;
  document.getElementById("bn1").pause();
  document.getElementById("bn1").currentTime = 0;
  document.getElementById("bb1").pause();
  document.getElementById("bb1").currentTime = 0;
  document.getElementById("hh1").pause();
  document.getElementById("hh1").currentTime = 0;
  document.getElementById("sb1").pause();
  document.getElementById("sb1").currentTime = 0;
}

function stopSelect() {
  document.getElementById("b1").classList.remove("selected");
  document.getElementById("b2").classList.remove("selected");
  document.getElementById("b3").classList.remove("selected");
  document.getElementById("b4").classList.remove("selected");
  document.getElementById("b5").classList.remove("selected");
  document.getElementById("b6").classList.remove("selected");
}
