"use strict";

const el = document.querySelector(".slide-in-left");
// el.classList.add("inview");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};

const io = new IntersectionObserver(callback);
io.observe(el);
