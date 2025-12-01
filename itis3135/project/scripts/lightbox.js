document.querySelectorAll(".lightbox-img").forEach(function(img) {
  img.addEventListener("click", function() {
    var box = document.createElement("div");
    box.classList.add("lightbox");
    box.innerHTML = '<div class="lightbox-content"><img src="' + img.src + '"></div>';
    box.addEventListener("click", function() {
      box.remove();
    });
    document.body.appendChild(box);
  });
});
