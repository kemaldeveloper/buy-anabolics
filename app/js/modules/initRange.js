import noUiSlider from "nouislider";

export const initRange = () => {
  const range = document.getElementById("range");

  if (range) {
    noUiSlider.create(range, {
      start: [12, 120],
      connect: true,
      margin: 15,
      tooltips: [
        {
          to: function (value) {
            return "$" + Math.round(value);
          },
          from: function (value) {
            return Number(value.replace("$", ""));
          },
        },
        {
          to: function (value) {
            return "$" + Math.round(value);
          },
          from: function (value) {
            return Number(value.replace("$", ""));
          },
        },
      ],
      range: {
        min: 12,
        max: 150,
      },
    });
  }
};
