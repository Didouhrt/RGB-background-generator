let redrange = document.querySelector("#red");
let greenrange = document.querySelector("#green");
let bluerange = document.querySelector("#blue");
let redtextval = document.querySelector("#redtextval");
let greentextval = document.querySelector("#greentextval");
let bluetextval = document.querySelector("#bluetextval");
let redo = document.querySelector("#redo");
let res = document.querySelector("#res");
let copy = document.querySelector("#copy");
let outpoot = document.querySelector(".outpoot");
let copyright = document.querySelector(".copyright");

let changeBg = () => {
  document.body.style.backgroundColor = `rgb(${redrange.value},${greenrange.value},${bluerange.value})`;
  res.textContent = `background-color:rgb(${redrange.value},${greenrange.value},${bluerange.value});`;
  redtextval.textContent = redrange.value;
  greentextval.textContent = greenrange.value;
  bluetextval.textContent = bluerange.value;
  if (
    parseInt(redrange.value) +
      parseInt(greenrange.value) +
      parseInt(bluerange.value) <
    200
  ) {
    copyright.style.color = "#fff";
  } else {
    copyright.style.color = "#000";
  }
};

redrange.addEventListener("input", changeBg);
greenrange.addEventListener("input", changeBg);
bluerange.addEventListener("input", changeBg);

redo.addEventListener("click", () => {
  redrange.value = 255;
  greenrange.value = 255;
  bluerange.value = 255;
  changeBg();
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(res.textContent);
  outpoot.classList.add("active");
  setTimeout(() => {
    outpoot.classList.remove("active");
  }, 1000);
});
changeBg();
