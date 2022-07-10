const target = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
const fragment = new DocumentFragment();

for (let i = 0; i < 3; i++) {
  const span = document.createElement("span");
  fragment.appendChild(span);
}

target.appendChild(fragment);

target.addEventListener("click", () => {
  target.classList.toggle("open");
  nav.classList.toggle("active");
});
