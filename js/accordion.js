var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion").classList.contains("active");
    if (isActive) {
      panel.style.maxHeight = "230px";
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}
