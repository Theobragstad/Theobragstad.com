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

    myInfo.style.left = posX + "px";
    myInfo.style.top = posY + "px";
  }
}

function stopDragging() {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);
}
