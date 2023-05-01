let navLinks = document.querySelectorAll(".header__link");
let btns = document.querySelectorAll(".btn");
let tabItems = document.querySelectorAll(".tab__item");

btns.forEach((btn) => {
  btn.onclick = () => {
    [...btns].forEach((item) => handleClass(item, "remove", "active"));
    handleClass(btn, "add", "active");
  };
});

navLinks.forEach((link) => {
  link.onclick = () => {
    [...navLinks].forEach((item) => handleClass(item, "remove", "active-link"));
    handleClass(link, "add", "active-link");
  };
});

tabItems.forEach((tab) => {
  tab.onclick = () => {
    [...tabItems].forEach((item) =>
      handleClass(item, "remove", "tab__item-active")
    );

    handleClass(tab, "add", "tab__item-active");
  };
});

function handleClass(selector, type, value) {
  selector.classList[type](value);
}
