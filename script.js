const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
