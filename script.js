console.time()
// ----------------------- DOM -----------------------
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

// ----------------------- VARIABLES -----------------------
let progressValue = 0;
let progressEndValue = 100;
let speed = 10;

// FUNCTIONS
let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #4d5bf9 ${progressValue * 3.6}deg,
    #cadcff ${progressValue * 3.6}deg
  )`
  if(progressValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);
console.timeEnd()