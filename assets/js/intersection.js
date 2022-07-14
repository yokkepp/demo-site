"use strict";

const el1 = document.querySelector(".slide-in-left");
const el2 = document.querySelector(".slide-in-right");
const els3 = document.querySelectorAll(".pinch-in");
// el.classList.add("inview");

const options = {
  rootMargin: "0px 0px -150px 0px",
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};

const io = new IntersectionObserver(callback, options);
io.observe(el1);
io.observe(el2);

els3.forEach((el) => {
  io.observe(el);
});
