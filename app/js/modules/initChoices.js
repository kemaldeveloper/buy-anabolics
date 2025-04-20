import Choices from "choices.js";

export const initChoices = () => {
  const selects = document.querySelectorAll(".js-select");

  selects.forEach((select) => {
    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: "",
      placeholder: false,
      renderSelectedChoices: "always",
      duplicateItemsAllowed: false,
      classNames: {
        containerOuter: ["choices", "d-inline-flex", "fw-light", "mb-0"],
        containerInner: ["choices__inner", "bg-transparent", "rounded"],
        listDropdown: ["choices__list--dropdown", "border-top-0"],
        selectedState: ["d-none"],
        highlightedState: ["text-danger"],
        listSingle: ["choices__list--single", "z-2", "pt-0", "pb-0", "ps-0"],
      },
    });

    // choices.showDropdown();
  });
};
