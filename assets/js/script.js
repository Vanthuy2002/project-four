let navLinks = document.querySelectorAll(".header__link");
let btns = document.querySelectorAll(".btn");
let tabItems = document.querySelectorAll(".tab__item");
let pricingSpinner = document.querySelectorAll(".pricing__spinner");
let pricingList = document.querySelector(".pricing__list");
let pricingNum = document.querySelectorAll(".pricing__number");

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

let boardService = {
  monthly: [{ price: "$99" }, { price: "$150" }, { price: "$299" }],
  yearly: [{ price: "$199" }, { price: "$250" }, { price: "$399" }],
};

pricingSpinner.forEach(
  (item, index) =>
    (item.onclick = () => {
      [...pricingSpinner].forEach((el) => handleClass(el, "remove", "active"));
      handleClass(item, "add", "active");

      if (index === 0) {
        handleAddPrice(boardService.monthly);
      } else {
        handleAddPrice(boardService.yearly);
      }
    })
);

function handleAddPrice(arr) {
  let html = arr.map((item) => {
    return `<article class="pricing__item">
    <span class="pricing__label">Basic</span>
    <p class="pricing__day-care">Day Care</p>
    <h3 class="pricing__number">${item.price}</h3>
    <a href="#!" class="btn pricing__checkout"> Purchase Now </a>
    <ul class="pricing__list-op">
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Single Room</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Socialist Exercise</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Custom Meals</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Spa and Grooming</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Excercise 2x</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Custom Meals</span>
      </li>
      <li class="pricing__option">
        <img src="./assets/img/check.svg" alt="" />
        <span>Grooming 2x</span>
      </li>
    </ul>
  </article>`;
  });

  pricingList.innerHTML = html.join("");
}

// mặc định là monthly
handleAddPrice(boardService.monthly);
