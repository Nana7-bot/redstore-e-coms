// For toggling the Menu Bar
const menuItems = document.getElementById("MenuItems");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// For Single Product Gallery
const productImage = document.getElementById("productImg");
const smallImage = document.getElementsByClassName("small-img");

smallImage[0].onclick = function () {
  productImage.src = smallImage[0].src;
};
smallImage[1].onclick = function () {
  productImage.src = smallImage[1].src;
};
smallImage[2].onclick = function () {
  productImage.src = smallImage[2].src;
};
smallImage[3].onclick = function () {
  productImage.src = smallImage[3].src;
};

// For toggle login & register form

function registerFn() {
  const loginForm = document.getElementById("logForm");
  const registerForm = document.getElementById("regForm");
  const indicator = document.getElementById("indicator");

  registerForm.classList.remove("non-active-form");
  loginForm.classList.add("non-active-form");
  indicator.style.transform = "translateX(100px)";
}

function loginFn() {
  const loginForm = document.getElementById("logForm");
  const registerForm = document.getElementById("regForm");
  const indicator = document.getElementById("indicator");

  registerForm.classList.add("non-active-form");
  loginForm.classList.remove("non-active-form");
  indicator.style.transform = "translateX(0px)";
}
