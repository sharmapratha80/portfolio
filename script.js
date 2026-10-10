

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Animated typing text
const typingText = document.getElementById("typingText");
const words = [
  "Web Developer",
  "Creative Thinker",
  "CSE Student",
  "Future Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentWord.substring(0, charIndex);

  let delay = deleting ? 55 : 100;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    delay = 1300;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal elements as they enter the screen
const revealElements = document.querySelectorAll(
  ".about-grid, .skill-card, .training-banner, " +
  ".project-card, .timeline-item, .contact-box, .contact-details"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}
