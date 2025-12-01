document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.className = "lightbox";

      const inner = document.createElement("div");
      inner.className = "lightbox-content";

      const bigImg = document.createElement("img");
      bigImg.src = img.src;
      bigImg.alt = img.alt;

      inner.appendChild(bigImg);
      overlay.appendChild(inner);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", function () {
        overlay.remove();
      });
    });
  });
});
