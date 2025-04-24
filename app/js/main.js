import { initChoices } from "./modules/initChoices.js";
import { initDropdowns } from "./modules/initDropdowns.js";
import { initRange } from "./modules/initRange.js";
import { initValidation } from "./modules/initValidation.js";
import { productCounter } from "./modules/ProductCounter.js";

const stretchRightIndenToEdge = () => {
  const newsPromo = document.querySelector(".news-promo");

  const newsPromoContainer = newsPromo.querySelector(".container");
  const rightOffset = parseFloat(window.getComputedStyle(newsPromoContainer).marginRight);

  const element = newsPromoContainer.firstElementChild;
  element.style.marginRight = `-${rightOffset + 15}px`;
};

window.addEventListener("DOMContentLoaded", function () {
  initDropdowns();
  initValidation();
  initChoices();
  initRange();
  productCounter();
  stretchRightIndenToEdge();
});

window.addEventListener("resize", function () {
  stretchRightIndenToEdge();
});
