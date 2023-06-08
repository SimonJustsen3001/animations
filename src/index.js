require("colorjoe/css/colorjoe.css");
var colorjoe = require("colorjoe");

var colorPicker1 = colorjoe.rgb("colorPicker1", "rgb(123, 234, 45)");
var colorPicker2 = colorjoe.rgb("colorPicker2", "rgb(123, 100, 1)");

let page = document.querySelector(".page");
let circleNumber = 5;
let stylesheet = document.getElementById("style").sheet;

let color1 = scaleRGB(colorPicker1.get().rgb());
let color2 = scaleRGB(colorPicker2.get().rgb());

let colors = createBlendedArray(circleNumber);

console.log(colors);

createNCircles(circleNumber);

colorPicker1.on("change", function (color) {
  color1 = scaleRGB(color.rgb());
  updateColors();
});

colorPicker2.on("change", function (color) {
  color2 = scaleRGB(color.rgb());
  updateColors();
});

function scaleRGB(unscaledRBG) {
  let scaledR = Math.round(unscaledRBG._red * 255);
  let scaledB = Math.round(unscaledRBG._blue * 255);
  let scaledG = Math.round(unscaledRBG._green * 255);
  return { _red: scaledR, _green: scaledG, _blue: scaledB };
}

function createBlendedArray(num) {
  let blendedArray = [color1];
  let difference = getDifference(color1, color2, num);
  for (let i = 1; i < num - 1; i++) {
    blendedArray.push(subtractColors(color1, difference, i));
  }
  blendedArray.push(color2);
  return blendedArray;
}

function getDifference(colorOne, colorTwo, num) {
  let numWithoutBaseColors = num - 1;
  let r = Math.round((colorOne._red - colorTwo._red) / numWithoutBaseColors);
  let b = Math.round((colorOne._blue - colorTwo._blue) / numWithoutBaseColors);
  let g = Math.round(
    (colorOne._green - colorTwo._green) / numWithoutBaseColors
  );
  return { _red: r, _green: g, _blue: b };
}

function subtractColors(color, colorDifference, index) {
  let r = color._red - colorDifference._red * index;
  let g = color._green - colorDifference._green * index;
  let b = color._blue - colorDifference._blue * index;
  return { _red: r, _green: g, _blue: b };
}

function updateColors() {
  const circles = document.querySelectorAll(".circle");
  colors = createBlendedArray(circleNumber);
  circles.forEach((circle, index) => {
    const color = colors[index];
    circle.style.backgroundColor = `rgb(${color._red}, 
                                        ${color._green}, 
                                        ${color._blue})`;
  });
}

function createNCircles(circleNumber) {
  for (let index = 0; index < circleNumber; index++) {
    var circleNum = index + 1;
    var cssRulesNum = stylesheet.cssRules.length;
    var circleElement = document.createElement("div");
    circleElement.className = `circle-${circleNum} circle`;
    var circleStyle = `.circle-${circleNum} 
                      {
                        height: ${circleNum}00px;
                        width: ${circleNum}00px;
                        border-radius: 50%;
                        background-color: rgb(${colors[index]._red}, 
                                              ${colors[index]._green}, 
                                              ${colors[index]._blue});
                        position: absolute;
                        z-index: ${circleNumber - index};
                      }`;
    stylesheet.insertRule(circleStyle, cssRulesNum);
    page.appendChild(circleElement);
  }
}

function rgbToHex(r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
