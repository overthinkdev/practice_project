// 슬라이드이미지 버튼
const HIDDEN_CLASSNAME = ".hidden";

const prevArrowBtn = document.querySelector("#prev_slide_btn");
const nextArrowBtn = document.querySelector("#next_slide_btn");

let translateNum = 0;

function handleSlideImg(translateNum) {
  if (translateNum == 0) {
    prevArrowBtn.classList.add("#hidden");
  } else {
    prevArrowBtn.classList.remove("#hidden");
  }
  document.querySelector(
    ".image_container"
  ).style.transform = `translate(${translateNum}vw)`;
}

function prevMoveImg() {
  handleSlideImg((translateNum += 100));
  if (translateNum > 0) {
    handleSlideImg((translateNum = 0));
  }
}

function nextMoveImg() {
  handleSlideImg((translateNum -= 100));
  if (translateNum < -200) {
    handleSlideImg((translateNum = 0));
  }
}

// 버튼 클릭시
prevArrowBtn.addEventListener("click", prevMoveImg);
nextArrowBtn.addEventListener("click", nextMoveImg);

// 자동 슬라이드 이미지
setInterval(nextMoveImg, 2500);
clearInterval();
