var isDragging = false;
var dragOffsetX = 0;
var dragOffsetY = 0;

function startDragging(event) {
  event.preventDefault();
  isDragging = true;
  dragOffsetX = event.clientX - document.querySelector(".myInfo").offsetLeft;
  dragOffsetY = event.clientY - document.querySelector(".myInfo").offsetTop;
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);
}



function drag(event) {
  if (isDragging) {
    var myInfo = document.querySelector(".myInfo");
    var posX = event.clientX - dragOffsetX;
    var posY = event.clientY - dragOffsetY;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Restrict horizontal movement
    var minPosX = myInfo.offsetWidth / 2 + 10;
    var maxPosX = windowWidth - 10 - myInfo.offsetWidth / 2;
    posX = Math.max(minPosX, Math.min(maxPosX, posX));
    myInfo.style.left = posX + "px";

    // Restrict vertical movement
    var minPosY = myInfo.clientHeight / 2 + 10;
    var maxPosY = windowHeight - 10 - myInfo.clientHeight / 2;
    posY = Math.max(minPosY, Math.min(maxPosY, posY));
    myInfo.style.top = posY + "px";
  }
}


function stopDragging() {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);

}