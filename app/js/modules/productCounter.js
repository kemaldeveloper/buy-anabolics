export const productCounter = () => {
  const counter = document.querySelectorAll(".product-counter");

  counter.forEach((counter) => {
    const input = counter.querySelector("input");
    const plus = counter.querySelector(".plus");
    const minus = counter.querySelector(".minus");

    plus.addEventListener("click", () => {
      input.value = +input.value + 1;
    });

    minus.addEventListener("click", () => {
      if (+input.value > +input.min) {
        input.value = +input.value - 1;
      }
    });
  });
};
