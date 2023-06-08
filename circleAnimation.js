const { normal } = require("color-blend");

let page = document.querySelector(".page");

let circleNumber = 5;

let stylesheet = document.getElementById("style").sheet;

let array = Array(5).fill(0);

let colors = ["#FF9900", "#FFB300", "#FFCC00", "#FFE600", "#FFFF00"];

array.forEach((circle, index) => {
  console.log("test");
  var circleNum = index + 1;
  var cssRulesNum = stylesheet.cssRules.length;
  var circleElement = document.createElement("div");
  circleElement.className = `circle-${circleNum}`;
  var circleStyle = `.circle-${circleNum} 
                    {
                      height: ${circleNum}00px;
                      width: ${circleNum}00px;
                      border-radius: 50%;
                      background-color: ${colors[index]};
                      position: absolute;
                      border: red solid 1px;
                      z-index: ${array.length - circleNum};
                    }`;
  stylesheet.insertRule(circleStyle, cssRulesNum);
  page.appendChild(circleElement);
});
