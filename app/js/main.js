import { initChoices } from "./modules/initChoices.js";
import { initDropdowns } from "./modules/initDropdowns.js";
import { initRange } from "./modules/initRange.js";
import { initValidation } from "./modules/initValidation.js";
import { productCounter } from "./modules/ProductCounter.js";

window.addEventListener("DOMContentLoaded", function () {
  initDropdowns();
  initValidation();
  initChoices();
  initRange();
  productCounter();
});
