import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const initProductsSlider = () => {
  const sliderContainers = document.querySelectorAll(".products-swiper");

  if (sliderContainers) {
    sliderContainers.forEach((sliderContainer) => {
      const slider = sliderContainer.querySelector(".swiper");
      const prevEl = sliderContainer.querySelector(".swiper-button-prev");
      const nextEl = sliderContainer.querySelector(".swiper-button-next");

      new Swiper(slider, {
        modules: [Navigation],
        lazy: true,
        slidesPerView: 3,
        spaceBetween: 31,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl,
        },
      });
    });
  }
};
