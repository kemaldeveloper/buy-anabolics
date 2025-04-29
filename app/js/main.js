import { initChoices } from "./modules/initChoices.js";
import { initDropdowns } from "./modules/initDropdowns.js";
import { initProductsSlider } from "./modules/initProductsSlider.js";
import { initRange } from "./modules/initRange.js";
import { initValidation } from "./modules/initValidation.js";
import { productCounter } from "./modules/ProductCounter.js";
import { stretchRightIndenToEdge } from "./modules/stretchRightIndenToEdge.js";

window.addEventListener("DOMContentLoaded", function () {
  initDropdowns();
  initValidation();
  initChoices();
  initRange();
  productCounter();
  stretchRightIndenToEdge();
  initProductsSlider();
});

window.addEventListener("resize", function () {
  stretchRightIndenToEdge();
});
