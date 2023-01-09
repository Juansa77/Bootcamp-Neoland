export const colorRandom = () => {
  const colorRandom = document.querySelector("#randomColor");
  colorRandom.addEventListener("click", () => {
    var random1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var random2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var random3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    console.log(random1);

    document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
  });
};

export const colorOriginal = () => {
  const originalColor = document.querySelector("#originalColor");
  originalColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "#c3cfa1";
  });
};
