// HOVER LINKS CONTACT
var hoverAnimation = document.getElementById("hoverApplication");

hoverAnimation.addEventListener("click", function () {
  this.classList.toggle("slidejs");
  setTimeout(function () {
    window.location.href = "mailto:application@panamapapersoffice.com?subject=Application";
    this.classList.remove("slidejs");
  }, 1000);
});

// HOVER IMAGES
var hoverAnimation = document.getElementById("hoverApplication");

hoverAnimation.addEventListener("click", function () {
  this.classList.toggle("slidejs");
  setTimeout(function () {
    window.location.href = "mailto:application@panamapapersoffice.com?subject=Application";
    this.classList.remove("slidejs");
  }, 1000);
});
