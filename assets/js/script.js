const boardService = {
  monthly: [{ price: "$99" }, { price: "$150" }, { price: "$299" }],
  yearly: [{ price: "$199" }, { price: "$250" }, { price: "$399" }],
};

const comments = [
  {
    img: "./assets/img/pet-cmt1.jpg",
    auth: "Thuy Nguyen",
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ea a nulla eaque dicta, labore nisi, recusandae dolores laboriosam impedit nemo ex asperiores illo tempore. Perferendis odit perspiciatis quia sapiente?",
  },

  {
    img: "./assets/img/pet-cmt2.jpg",
    auth: "Yua Mikami",
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ea a nulla eaque dicta, labore nisi, recusandae dolores???",
  },

  {
    img: "./assets/img/pet-cmt3.jpg",
    auth: "Emi Fukuda",
    title:
      "Aliquam repudiandae molestias, ipsum sit voluptatem doloribus explicabo odio, ducimus dolores officiis dolorem enim doloremque voluptates reiciendis commodi autem consectetur omnis soluta recusandae vero??",
  },
  {
    img: "./assets/img/pet-cmt4.jpg",
    auth: "Richad Conner",
    title:
      "Maiores enim ipsa aut, aspernatur aliquam eligendi libero sapiente debitis ducimus consectetur, sequi provident sit culpa molestiae fugit cumque cum deserunt?",
  },
];

let navLinks = document.querySelectorAll(".header__link");
let btns = document.querySelectorAll(".btn");
let tabItems = document.querySelectorAll(".tab__item");
let pricingSpinner = document.querySelectorAll(".pricing__spinner");
let pricingList = document.querySelector(".pricing__list");
let pricingNum = document.querySelectorAll(".pricing__number");
let reviewsContents = document.querySelector(".reviews__contents");
let listReview = document.querySelector(".reviews__list");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function renderReviews(arrCmt) {
  let itemReviews = arrCmt.map((cmt) => {
    return `<article class="reviews__item">
    <figure class="reviews__item-media">
      <img
        src=${cmt.img}
        alt=""
        class="reviews__item-img"
      />
    </figure>

    <section class="reviews__item-contents">
      <h2 class="heading reviews__heading">Our Reviews</h2>
      <blockquote class="reviews__cmt">
        ${cmt.title}
      </blockquote>

      <p class="reviews__auth">${cmt.auth}</p>
    </section>
  </article>`;
  });
  listReview.innerHTML = itemReviews.join("");
}

renderReviews(comments);
let index = 0;
let items = document.querySelectorAll(".reviews__item");

next.onclick = () => {
  index++;
  handleClass(next, "add", "active-controls");
  if (index >= items.length) {
    handleClass(next, "remove", "active-controls");
  }
  loadComments();
};

function loadComments() {
  let itemWidth = reviewsContents.offsetWidth;
  reviewsContents.scrollLeft += itemWidth;
}

function loadPrevCmt() {
  let itemWidth = reviewsContents.offsetWidth;
  reviewsContents.scrollLeft -= itemWidth;
}

prev.onclick = () => {
  index--;
  handleClass(prev, "add", "active-controls");
  if (index === 0) {
    handleClass(prev, "remove", "active-controls");
  }
  loadPrevCmt();
};

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

pricingSpinner.forEach(
  (item, index) =>
    (item.onclick = () => {
      [...pricingSpinner].forEach((el) =>
        handleClass(el, "remove", "actively")
      );
      handleClass(item, "add", "actively");

      if (index === 0) {
        handleAddPrice(boardService.monthly);
      } else {
        handleAddPrice(boardService.yearly);
      }
    })
);

function handleAddPrice(arr) {
  return arr.map((item, itemIndex) => {
    pricingNum.forEach((pri, index) => {
      if (index === itemIndex) {
        pri.textContent = item.price;
      }
    });
  });
}

// Lặp qua arr, pricingNum, so sánh index của hai thứ
//Nếu trùng thì thực hiện logic
