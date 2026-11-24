/**
 * script.js
 * My First Web Engineering Project
 *
 * Features:
 *  1. Hamburger menu toggle (mobile navigation)
 *  2. Smooth scrolling for all anchor links
 *  3. Active nav link highlight on scroll
 *  4. Skill-bar animation when section enters viewport
 *  5. Contact form validation & feedback
 *  6. Navbar background change on scroll
 */

// ─────────────────────────────────────────────
// 1. HAMBURGER MENU TOGGLE
// ─────────────────────────────────────────────

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu   = document.getElementById("mobile-menu");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

/**
 * Toggles the mobile menu open/closed and animates the hamburger icon
 * into an "X" shape when the menu is open.
 */
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle("hidden") === false;

  // Update aria-expanded for accessibility
  hamburgerBtn.setAttribute("aria-expanded", isOpen);

  // Animate hamburger → X
  if (isOpen) {
    hamburgerLines[0].style.transform = "translateY(8px) rotate(45deg)";
    hamburgerLines[1].style.opacity   = "0";
    hamburgerLines[2].style.transform = "translateY(-8px) rotate(-45deg)";
  } else {
    hamburgerLines[0].style.transform = "";
    hamburgerLines[1].style.opacity   = "1";
    hamburgerLines[2].style.transform = "";
  }
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);

// Close the mobile menu when any mobile nav link is clicked
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerLines[0].style.transform = "";
    hamburgerLines[1].style.opacity   = "1";
    hamburgerLines[2].style.transform = "";
  });
});


// ─────────────────────────────────────────────
// 2. SMOOTH SCROLLING
// ─────────────────────────────────────────────

/**
 * Intercepts clicks on any anchor link that points to an on-page id (#…)
 * and scrolls to the target smoothly, accounting for the fixed navbar height.
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignore empty hashes
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const navbarHeight = document.querySelector("header").offsetHeight;
    const targetTop    = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  });
});


// ─────────────────────────────────────────────
// 3. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
// ─────────────────────────────────────────────

const sections    = document.querySelectorAll("section[id]");
const navLinks    = document.querySelectorAll(".nav-link");
const navHeight   = document.querySelector("header").offsetHeight;

/**
 * Checks which section is currently in view and marks the matching
 * desktop nav link as "active" (white text instead of gray).
 */
function setActiveNavLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navHeight - 20;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-white");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("text-white");
    }
  });
}

window.addEventListener("scroll", setActiveNavLink, { passive: true });


// ─────────────────────────────────────────────
// 4. NAVBAR BACKGROUND ON SCROLL
// ─────────────────────────────────────────────

const header = document.querySelector("header");

/**
 * Adds a slightly more opaque background to the navbar once the user
 * scrolls past the fold, improving legibility over page content.
 */
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    header.classList.add("bg-gray-950/95");
    header.classList.remove("bg-gray-950/80");
  } else {
    header.classList.add("bg-gray-950/80");
    header.classList.remove("bg-gray-950/95");
  }
}

window.addEventListener("scroll", handleNavbarScroll, { passive: true });


// ─────────────────────────────────────────────
// 5. SKILL BAR ANIMATION (Intersection Observer)
// ─────────────────────────────────────────────

/**
 * Uses IntersectionObserver to watch each skill-bar element.
 * When a bar enters the viewport, its width is animated from 0 to
 * the value stored in its data-width attribute.
 */
const skillBars = document.querySelectorAll(".skill-bar");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar       = entry.target;
        const targetWidth = bar.dataset.width; // e.g. "90%"
        bar.style.width = targetWidth;
        skillObserver.unobserve(bar); // animate only once
      }
    });
  },
  { threshold: 0.3 }
);

skillBars.forEach((bar) => skillObserver.observe(bar));


// ─────────────────────────────────────────────
// 6. CONTACT FORM VALIDATION & FEEDBACK
// ─────────────────────────────────────────────

const contactForm  = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

/**
 * Validates the contact form fields.
 * Returns true if all fields pass, false (with error message) otherwise.
 *
 * @param {string} name
 * @param {string} email
 * @param {string} message
 * @returns {{ valid: boolean, error: string }}
 */
function validateForm(name, email, message) {
  if (!name.trim()) {
    return { valid: false, error: "Please enter your name." };
  }
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Please enter a valid email address." };
  }
  if (!message.trim() || message.trim().length < 10) {
    return { valid: false, error: "Message must be at least 10 characters." };
  }
  return { valid: true, error: "" };
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name    = document.getElementById("name").value;
  const email   = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const { valid, error } = validateForm(name, email, message);

  formFeedback.classList.remove("hidden", "text-green-400", "text-red-400");

  if (!valid) {
    // Show error
    formFeedback.textContent = `❌ ${error}`;
    formFeedback.classList.add("text-red-400");
    formFeedback.classList.remove("hidden");
    return;
  }

  // Simulate a successful submission
  formFeedback.textContent = `✅ Thanks, ${name.trim()}! Your message has been received.`;
  formFeedback.classList.add("text-green-400");
  formFeedback.classList.remove("hidden");

  // Reset the form after a short delay
  setTimeout(() => {
    contactForm.reset();
    formFeedback.classList.add("hidden");
  }, 4000);
});


// ─────────────────────────────────────────────
// INIT — Run on DOM ready
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
  handleNavbarScroll();
});
