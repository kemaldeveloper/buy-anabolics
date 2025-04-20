import noUiSlider from "nouislider";

export const initRange = () => {
  const range = document.getElementById("range");

  if (range) {
    const slider = noUiSlider.create(range, {
      start: [12, 120],
      connect: true,
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
