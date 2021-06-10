// ACCORDION CONTRIBUTION
var acc = document.getElementsByClassName("accordion--contribution");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--contribution").classList.contains("active");
    if (isActive) {
      panel.style.maxHeight = "25vw";
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}

// ACCORDION EXHIBITION
var acc = document.getElementsByClassName("accordion--exhibition");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--exhibition").classList.contains("active");
    if (isActive) {
      panel.style.maxHeight = "25vw";
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}

// ACCORDION SERVICES
var acc = document.getElementsByClassName("accordion--services");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--services").classList.contains("active");
    if (isActive) {
      panel.style.maxHeight = "25rem";
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}
