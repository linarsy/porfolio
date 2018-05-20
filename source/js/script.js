var toggle = document.querySelector(".page-header__toggle");
var navigation = document.querySelector(".page-header__wrapper");
var button = document.querySelector(".best-sale__order");
var cart = document.querySelectorAll(".minicard__order");
var modal = document.querySelector(".modal");

navigation.classList.add("page-header__wrapper--close");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navigation.classList.contains("page-header__wrapper--close")) {
    navigation.classList.remove("page-header__wrapper--close");
    navigation.classList.add("page-header__wrapper--open");
  } else if (navigation.classList.contains("page-header__wrapper--open")) {
    navigation.classList.remove("page-header__wrapper--open");
    navigation.classList.add("page-header__wrapper--close");
  }
});

if (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
}

if (cart) {
  for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});
