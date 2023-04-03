// Creating an event that will execute a function, upon the page loading, in which it will grab the gif from the about.html and append it to the div tag , class container2 and will set a timer for it to disappear after 1.55 seconds. This gif of the portal dumping out Rick and the kids is my transition to being loaded or "dumped" onto a new page!
window.addEventListener("load", function () {
  let imageElement = document.getElementById("my-image");
  imageElement.src = "rickandomortygifPORTAL.gif";
});

const body = document.querySelector("body");
const container = document.querySelector("body .container2");
const gifcontainer = document.querySelector("body .container2 .gifcontainer");
const image = document.getElementById("my-image");

setTimeout(() => {
  gifcontainer.removeChild(image);
}, 1550);
