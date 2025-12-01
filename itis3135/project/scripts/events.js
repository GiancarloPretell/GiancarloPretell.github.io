document.addEventListener("DOMContentLoaded", function() {
  var upcoming = document.querySelector(".upcoming-events");
  var past = document.querySelector(".past-events");

  document.getElementById("show-upcoming").onclick = function() {
    upcoming.style.display = "block";
    past.style.display = "none";
  };

  document.getElementById("show-past").onclick = function() {
    upcoming.style.display = "none";
    past.style.display = "block";
  };

  document.getElementById("show-all").onclick = function() {
    upcoming.style.display = "block";
    past.style.display = "block";
  };
});
