window.addEventListener("load", function () {
  var imageElement = document.getElementById("my-image");
  imageElement.src = "rickandomortygifPORTAL.gif";
});

const body = document.querySelector("body");
const container = document.querySelector("body .container2");
const gifcontainer = document.querySelector("body .container2 .gifcontainer");
const image = document.getElementById("my-image");

setTimeout(() => {
  gifcontainer.removeChild(image);
}, 1550);
