const boxes = document.querySelector(".boxes");
for (i = 0; i < 16; i++) {
  let a = document.createElement("div");
  a.classList.add("box");
  boxes.appendChild(a);
}
