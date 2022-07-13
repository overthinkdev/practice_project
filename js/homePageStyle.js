const slideImageX = 0;

document.querySelector("#next_btn").addEventListener("click", function () {
  document.querySelector("#image--container").style.transform =
    "translate(-100vw)";
});

document.querySelector("#prev_btn").addEventListener("click", function () {
  document.querySelector("#image--container").style.transform =
    "translate(+100vw)";
});
