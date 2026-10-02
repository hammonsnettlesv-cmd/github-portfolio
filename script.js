const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".navigation-links");
const navigationItems = document.querySelectorAll(".navigation-links a");
const currentYear = document.querySelector("#current-year");

// Display the current year automatically.
currentYear.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuButton.addEventListener("click", () => {
  const menuIsOpen = navigationLinks.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a navigation link.
navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
