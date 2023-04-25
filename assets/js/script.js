let navLinks = document.querySelectorAll(".header__link");
let btns = document.querySelectorAll(".btn");

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

function handleClass(selector, type, value) {
  selector.classList[type](value);
}
