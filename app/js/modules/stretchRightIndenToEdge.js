export const stretchRightIndenToEdge = () => {
  const newsPromo = document.querySelector(".news-promo");

  if (newsPromo) {
    const newsPromoContainer = newsPromo.querySelector(".container");
    const rightOffset = parseFloat(window.getComputedStyle(newsPromoContainer).marginRight);

    const element = newsPromoContainer.firstElementChild;
    element.style.marginRight = `-${rightOffset + 15}px`;
  }
};
