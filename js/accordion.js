// ACCORDION CONTRIBUTION
var accContrib = document.getElementsByClassName("accordion--contribution");

for (var i = 0; i < accContrib.length; i++) {
  accContrib[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--contribution").classList.contains("active");
    if (isActive) {
      if (window.innerHeight < 900) {
        panel.style.maxHeight = "15%";
      } else {
        panel.style.maxHeight = "60%";
      }
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}

// ACCORDION EXHIBITION
var accExhib = document.getElementsByClassName("accordion--exhibition");

for (var i = 0; i < accExhib.length; i++) {
  accExhib[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--exhibition").classList.contains("active");
    if (isActive) {
      if (window.innerHeight < 900) {
        panel.style.maxHeight = "15%";
      } else {
        panel.style.maxHeight = "60%";
      }
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}

// ACCORDION SERVICES
var accServices = document.getElementsByClassName("accordion--services");

for (var i = 0; i < accServices.length; i++) {
  accServices[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isActive = document.querySelector(".accordion--services").classList.contains("active");
    if (isActive) {
      if (window.innerHeight < 900) {
        panel.style.maxHeight = "15%";
      } else {
        panel.style.maxHeight = "250px";
      }
    } else {
      panel.style.maxHeight = "0px";
    }
  });
}
