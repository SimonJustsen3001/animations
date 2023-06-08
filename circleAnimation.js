let page = document.querySelector(".page");

let circleNumber = 5;

let stylesheet = document.getElementById("style").sheet;

let array = Array(3).fill(0);

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
                      background-color: gray;
                      position: absolute;
                      border: red solid 1px;
                      z-index: ${array.length - circleNum};
                    }`;
  stylesheet.insertRule(circleStyle, cssRulesNum);
  page.appendChild(circleElement);
});
