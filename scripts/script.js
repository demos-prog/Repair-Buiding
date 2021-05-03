"use strict";

// NAVBAR items ========================================= start
let navbar__items = document.querySelectorAll(".navbar__item");
let navbarBot__lists = document.querySelectorAll(".navbarBot__list");

for (let i = 0; i < navbar__items.length; i++) {
  const elem = navbar__items[i];
  elem.addEventListener("click", () => {
    navbarBot__lists[i].classList.toggle("invisible");
  });
}
// NAVBAR items ========================================= end

// greenLines visibilite START =====================================
let sect1FormTitles = document.querySelectorAll(".form__head_title-item");
let sect4Cont__selectHouse_items = document.querySelectorAll(
  ".sect4Cont__selectHouse_item"
);

for (const item of sect1FormTitles) {
  item.addEventListener("click", () => {
    sect1FormTitles.forEach((elem) => {
      elem.classList.remove("greenLine");
    });
    item.classList.add("greenLine");
  });
}
for (const item of sect4Cont__selectHouse_items) {
  item.addEventListener("click", () => {
    sect4Cont__selectHouse_items.forEach((elem) => {
      elem.classList.remove("greenLine");
    });
    item.classList.add("greenLine");
  });
}
// greenLines visibilite END =====================================

// greenCircle visibility ================================ start
let greenCircles = document.querySelectorAll(".greenCircle");
let imgs = document.querySelectorAll(".choose__item_img>img");
let choose__texts = document.querySelectorAll(".choose__text");

for (let i = 0; i < imgs.length; i++) {
  const elem = imgs[i];
  elem.addEventListener("click", () => {
    greenCircles.forEach((element) => {
      element.classList.add("invis");
    });
    choose__texts.forEach((element) => {
      element.classList.remove("bolder");
    });
    greenCircles[i].classList.remove("invis");
    choose__texts[i].classList.add("bolder");
  });
}
// greenCircle visibility ================================ end

// Slider Start ============================
let viewport = document.getElementById("viewport").offsetWidth;
let viewportBody = document.getElementById("viewport");
let sliderBody = document.querySelector(".sliderBody");
let slides = document.querySelectorAll(".slide");
let inpNumberOfSlides = document.querySelector("#inpNumberOfSlides");
let outCurrenNumberOfSlides = document.querySelector(
  "#outCurrenNumberOfSlides"
);

let numbOfslidesToShowOnce = 3;
let numberOfSlides = slides.length;
let startSlide = 0;

if (window.innerWidth <= 1450) {
  numbOfslidesToShowOnce = 1;
}

outCurrenNumberOfSlides.innerHTML = numbOfslidesToShowOnce;
// ширина слайда
sliderBody.style.width =
  (viewport * numberOfSlides) / numbOfslidesToShowOnce + "px";
// ==========

inpNumberOfSlides.addEventListener("change", () => {
  if (isNaN(+inpNumberOfSlides.value)) {
    alert("Enter a NUMBER pls !!!!");
    inpNumberOfSlides.value = "";
    return;
  }
  if (+inpNumberOfSlides.value <= 0) {
    alert("Enter a POSITIVE number pls !!!!");
    inpNumberOfSlides.value = "";
    return;
  }
  numbOfslidesToShowOnce = +inpNumberOfSlides.value;
  outCurrenNumberOfSlides.innerHTML = numbOfslidesToShowOnce;
  sliderBody.style.width =
    (viewport * numberOfSlides) / numbOfslidesToShowOnce + "px";
  inpNumberOfSlides.value = "";
});

document.querySelector("#next").addEventListener("click", () => {
  if (startSlide < numberOfSlides - 1) {
    startSlide++;
  } else {
    startSlide = 0;
  }
  sliderBody.style.left =
    (-startSlide * viewport) / numbOfslidesToShowOnce + "px";
});

// setInterval(() => {
//   if (startSlide < numberOfSlides - 1) {
//     startSlide++;
//   } else {
//     startSlide = 0;
//   }
//   sliderBody.style.left =
//     (-startSlide * viewport) / numbOfslidesToShowOnce + "px";
// }, 10000);

document.querySelector("#prev").addEventListener("click", () => {
  if (startSlide > 0) {
    startSlide--;
  } else {
    startSlide = numberOfSlides - 1;
  }
  sliderBody.style.left =
    (-startSlide * viewport) / numbOfslidesToShowOnce + "px";
});

// swipe - start =====================================
let mouseIsDown = false;

viewportBody.ondragstart = function () {
  return false;
};
let startX = 0;
let endX = 0;

viewportBody.addEventListener("pointerdown", (e) => {
  startX = e.clientX;
  mouseIsDown = true;
});

var deltaX = 0;

document.addEventListener("pointerup", (e) => {
  endX = e.clientX;

  if (
    mouseIsDown &&
    Math.abs(deltaX) <= sliderBody.offsetWidth / numbOfslidesToShowOnce
  ) {
    deltaX += endX - startX;
  } else {
    deltaX = sliderBody.offsetWidth;
  }
  if (deltaX > 0) deltaX = 0;

  sliderBody.style.left =
    (-startSlide * viewport) / numbOfslidesToShowOnce + deltaX + "px";

  mouseIsDown = false;
});
// swipe - end ======================================
// Slider End ============================

// Uslugi Start ===========================
let bTNSList__itemS = document.querySelectorAll(".BTNSList__item");
let uslugaS = document.querySelectorAll(".usluga");
let uslugaDopFormS = document.querySelectorAll(".uslugaDopForm");

for (let i = 0; i < bTNSList__itemS.length; i++) {
  const element = bTNSList__itemS[i];

  element.addEventListener("click", () => {
    uslugaDopFormS.forEach((el) => {
      el.classList.add("displayNone");
    });

    bTNSList__itemS.forEach((el) => {
      el.classList.remove("act");
    });

    uslugaS.forEach((elem) => {
      if (!elem.classList.contains("displayNone")) {
        elem.classList.add("displayNone");
      }
    });

    element.classList.add("act");
    uslugaS[i].classList.remove("displayNone");
    uslugaDopFormS[i].classList.remove("displayNone");
  });
}
// Uslugi End ===========================

// swap Workers =========================== Start
let mainWorker = document.querySelector(".mainWorker");
let offWorker = document.querySelector(".offWorker");
let mainWorker1 = document.querySelector(".mainWorker1");
let offWorker1 = document.querySelector(".offWorker1");

document.querySelector(".workers").addEventListener("click", () => {
  mainWorker1.classList.toggle("displayNone");
  offWorker1.classList.toggle("displayNone");

  mainWorker.classList.toggle("displayNone");
  offWorker.classList.toggle("displayNone");
});
// swap Workers =========================== End
