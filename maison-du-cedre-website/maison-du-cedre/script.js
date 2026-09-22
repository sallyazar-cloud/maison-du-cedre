const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Merci ! Le formulaire est prêt. Pour recevoir les messages, il faudra connecter votre adresse e-mail ou un service de formulaire.";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
