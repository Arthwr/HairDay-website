// Listen for window resize events
document.addEventListener("DOMContentLoaded", function () {
  // Listen for window resize events
  window.addEventListener("resize", function () {
    let links = document.getElementById("menu");
    let screenWidth =
      window.innerWidth || this.document.documentElement.clientWidth;
    if (screenWidth > 425) {
      links.style.display = "flex";
    } else {
      links.style.display = "none";
    }
  });
});

// Toggle hamburger menu
function toggleFunc() {
  let links = document.getElementById("menu");

  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}
