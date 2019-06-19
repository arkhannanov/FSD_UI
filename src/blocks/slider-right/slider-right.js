import { compileFunction } from "vm";

var rangeSlider2 = document.getElementById("rs-range-line2");
var color = document.getElementById("slider-right_color");

rangeSlider2.addEventListener("input", showSliderValue2, false);

function showSliderValue2() {
  var bulletPosition2 = (rangeSlider2.value /rangeSlider2.max);
  color.style.width = (bulletPosition2 * 235) + 6 + "px";
}
