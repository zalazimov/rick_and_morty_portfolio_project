window.addEventListener("load", function () {
  var imageElement = document.getElementById("my-image");
  imageElement.src = "rickandomortygifPORTAL.gif";
});

const body = document.querySelector("body");
const image = document.getElementById("my-image");

setTimeout(() => {
  body.removeChild(image);
}, 1500);
