document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    let errors = [];

    if (!name) errors.push("Please enter your name.");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.push("Please enter a valid email address.");
    }
    if (!text) errors.push("Please enter a message.");

    message.classList.remove("error", "success");

    if (errors.length > 0) {
      message.textContent = errors.join(" ");
      message.classList.add("error");
    } else {
      message.textContent = "Thanks! Your request was received (simulated).";
      message.classList.add("success");
      form.reset();
    }
  });
});
