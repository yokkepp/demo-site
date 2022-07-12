"use strict";

const img = document.querySelector("#topview");

const callback1 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img.classList.add("inview");
    } else {
      img.classList.remove("inview");
    }
  });
};

const io = new IntersectionObserver(callback1);
io.observe(img);
const images = ["top1.jpeg", "top2.jpeg", "top3.jpeg"];

// function slideImage() {
//     //もし、topviewが見えているのなら、intersecitonobserver？

//     //3秒ごとに、img.srcを変更する。
//     if () {
//         setTimeout(() => {
//             img.src = `./assets/images/${}`
//         }, 3000);
//     }
// }
