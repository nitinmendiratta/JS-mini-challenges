// https://github.com/bradtraversy/50projects50days/tree/master/expanding-cards
import "./styles.css";
let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (ev) => {
    panels.forEach((p) => {
      p.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
