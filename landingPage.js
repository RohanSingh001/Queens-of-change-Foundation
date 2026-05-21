const menuButton = document.querySelector(".smallNav i");
const mobileMenu = document.querySelector(".smallNavSec");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      mobileMenu.classList.remove("show");
    }
  });
}
