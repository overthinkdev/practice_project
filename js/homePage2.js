

document.querySelector(".prev_slide_btn img").addEventListener("click", function () {
  sildeNum=-100;
  document.querySelector(".image_container").style.transform =
    "translate(`${slideNum}`vw)";
});

document.querySelector(".next_slide_btn img").addEventListener("click", function () {
  document.querySelector(".image_container").style.transform =
    "translate(-200vw)";
});