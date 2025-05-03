import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const initProductsSlider = () => {
  const sliderContainers = document.querySelectorAll(".products-swiper");

  if (sliderContainers) {
    sliderContainers.forEach((sliderContainer) => {
      const slider = sliderContainer.querySelector(".swiper");
      const prevEl = sliderContainer.querySelector(".swiper-button-prev");
      const nextEl = sliderContainer.querySelector(".swiper-button-next");
      const defaultViewCount = slider.getAttribute("data-view");
      console.log(defaultViewCount);

      new Swiper(slider, {
        modules: [Navigation],
        spaceBetween: 31,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 31,
          },
          1200: {
            slidesPerView: 3,
          },
          1460: {
            slidesPerView: defaultViewCount ? defaultViewCount : 3,
          },
        },
      });
    });
  }
};
