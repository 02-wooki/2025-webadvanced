// script.js
document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".project a");
  projectLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
          link.style.transform = "scale(1.1)";
          link.style.transition = "0.3s";
      });
      link.addEventListener("mouseout", () => {
          link.style.transform = "scale(1)";
      });
  });
});
