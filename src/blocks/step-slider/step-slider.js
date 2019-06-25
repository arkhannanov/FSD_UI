import { compileFunction } from "vm";

let rangeSlider2 = document.getElementById("rs-range-line2");
let color = document.getElementById("step-slider_color");

rangeSlider2.addEventListener("input", showSliderValue2, false);

function showSliderValue2() {
  let bulletPosition2 = (rangeSlider2.value /rangeSlider2.max);
  color.style.width = (bulletPosition2 * 235) + 6 + "px";
}
