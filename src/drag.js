let circWrap = document.querySelector(".circle-wrapper");
let halfWidth = window.innerWidth / 2;
let halfHeight = window.innerHeight / 2;
let mouseDown = false;

circWrap.addEventListener("mousedown", (event) => {
  mouseDown = true;
});

circWrap.addEventListener("mousemove", (event) => {
  if (mouseDown) {
    dragElement(event);
  }
});

circWrap.addEventListener("mouseup", (event) => {
  mouseDown = false;
});

circWrap.addEventListener("mouseleave", (event) => {
  mouseDown = false;
});

function dragElement(event) {
  console.log(circWrap);
  circWrap.style.transform = `translate(${event.clientX - halfWidth}px, ${
    event.clientY - halfHeight
  }px)`;
}
