// Countdown Timer
const targetDate = new Date("2025-01-01T00:00:00").getTime();

const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    document.getElementById("countdown").innerHTML =
      "<p>Countdown Complete!</p>";
    clearInterval(interval);
  }
}

// Navbar Scroll Behavior
let Nav = document.querySelector("nav");

window.onscroll = function () {
  if (scrollY === 0) {
    Nav.style.cssText = "box-shadow: none; background: none; border: none;";
  } else {
    Nav.style.cssText = `
      border-bottom: solid 1px #b3a09f;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
    `;
  }
};

window.onload = function () {
  if (scrollY === 0) {
    Nav.style.cssText = "box-shadow: none; background: none; border: none;";
  } else {
    Nav.style.cssText = `
      border-bottom: solid 1px #b3a09f;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
    `;
  }
};

// Smooth Scrolling
function Scroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Scroll1() {
  window.scrollTo({
    top: 1500,
    behavior: "smooth",
  });
}
function Scroll2() {
  window.scrollTo({
    top: 2479,
    behavior: "smooth",
  });
}

function Scroll3() {
  window.scrollTo({
    top: 4395,
    behavior: "smooth",
  });
}

function Scroll4() {
  window.scrollTo({
    top: 6350,
    behavior: "smooth",
  });
}

let active_slide = 0;
const coverSlider = document.getElementById("cover-slider");
const slides = coverSlider.querySelectorAll(".slider-cover");
const leftBtn = document.getElementById("slider-left-btn");
const rightBtn = document.getElementById("slider-right-btn");

leftBtn.addEventListener("click", (e) => {
  moveSlider(-1);
});

rightBtn.addEventListener("click", (e) => {
  moveSlider(1);
});

function moveSlider(direction) {
  if (direction > 0) {
    active_slide = (active_slide + 1) % slides.length;
    showSlide(active_slide);
  } else {
    active_slide = (active_slide - 1 + slides.length) % slides.length;
    showSlide(active_slide);
  }
}

function showSlide(index) {
  console.log(index);
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}
