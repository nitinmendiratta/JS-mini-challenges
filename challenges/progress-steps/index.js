const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let activeIdx = 0;

prevBtn.addEventListener("click", () => {
  activeIdx--;
  if (activeIdx < 0) {
    activeIdx = 0;
  }
  updateProgressBar();
});
nextBtn.addEventListener("click", () => {
  activeIdx++;
  if (activeIdx > circles.length - 1) {
    activeIdx = circles.length - 1;
  }
  updateProgressBar();
});

function updateProgressBar() {
  circles.forEach((c, i) => {
    if (i <= activeIdx) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  updateButton();
}

function updateButton() {
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  if (activeIdx == 0) {
    prevBtn.disabled = true;
  } else if (activeIdx == circles.length - 1) {
    nextBtn.disabled = true;
  }
}
