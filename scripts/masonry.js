document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".image-grid");
  const items = grid.querySelectorAll(".image-item");

  const resizeGridItems = () => {
    items.forEach((item) => {
      const contentHeight = item.querySelector("img").getBoundingClientRect().height;
      item.style.gridRowEnd = `span ${Math.ceil(contentHeight / 10)}`;
    });
  };

  // Recalculate on load and resize
  window.addEventListener("load", resizeGridItems);
  window.addEventListener("resize", resizeGridItems);
});
