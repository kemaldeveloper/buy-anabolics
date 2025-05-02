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
            slidesPerView: 2,
          },
          1460: {
            slidesPerView: 3,
          },
        },
      });
    });
  }
};
