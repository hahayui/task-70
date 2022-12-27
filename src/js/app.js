import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

const sampleImage = document.querySelector(".image");
sampleImage.addEventListener("click", () => {
sampleImage.style.setProperty("scale",2);
});

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
