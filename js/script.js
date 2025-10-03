document.addEventListener("DOMContentLoaded", () => {
  console.log("FlavorBurst Kitchen is live!");

  // Theme toggle
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.querySelector("header").classList.toggle("dark-mode");
      document.querySelector("footer").classList.toggle("dark-mode");

      // Optional: toggle dark mode on cards and nav links
      document.querySelectorAll(".card").forEach(card => {
        card.classList.toggle("dark-mode");
      });
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.toggle("dark-mode");
      });
    });
  }

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const response = document.getElementById("formResponse");

      if (!name || !email || !message) {
        response.textContent = "Please fill in all fields.";
        response.style.color = "red";
      } else {
        response.textContent = "Thank you! Your message has been sent.";
        response.style.color = "green";
        form.reset();
      }
    });
  }
});
