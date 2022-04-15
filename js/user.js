// Highlighting tabs and switching between them
const pagesList = document.querySelectorAll(".page");
const pagesListArr = Array.from(pagesList);
const pages = [
  document.querySelector(".general-page"),
  document.querySelector(".training"),
  document.querySelector(".blog"),
];

pagesList.forEach((pageItem) => {
  pageItem.addEventListener("click", () => {
    pagesList.forEach((pageItem) => {
      pageItem.classList.remove("active-page");
    });
    pages.forEach((page) => {
      page.classList.remove("show");
    });
    pageItem.classList.toggle("active-page");
    pages[pagesListArr.indexOf(pageItem)].classList.add("show");
  });
});

//Print info about program
const trainingTaskEl = document.querySelector(".training-task");
const trainingTaskDoneContainerEl = document.querySelector(
  ".training-task-done-container"
);
const trainingTaskContainerEl = document.querySelector(
  ".training-tasks-container"
);
const startTrainingBtnEl = document.querySelector(".start-training-btn");
const trainingInfoContainerEl = document.querySelector(
  ".training-info-container"
);

if (acc.programName !== "") {
  trainingTaskEl.textContent = "На тебе сьогодні чекає";
  trainingTaskDoneContainerEl.classList.add("flex");
  startTrainingBtnEl.classList.add("flex");
} else {
  trainingTaskEl.textContent = "У тебе ще немає тренувань 😔";
  trainingTaskContainerEl.classList.add("blur");
  trainingInfoContainerEl.classList.add("blur");
}
