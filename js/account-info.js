//Print stats
const accEmailInputEl = document.getElementById("acc-email");
const accNameInputEl = document.getElementById("acc-email");
const accStatsTitsInputEl = document.getElementById("acc-tits");
const accStatsWaistInputEl = document.getElementById("acc-waist");
const accStatsHipsInputEl = document.getElementById("acc-hips");
const accStatsWeightInputEl = document.getElementById("acc-weight");

if (acc.email !== "") {
  accEmailInputEl.value = acc.email;
}

if (acc.name !== "") {
  accNameInputEl.value = acc.name;
}

if (acc.stats.tits !== "") {
  accStatsTitsInputEl.value = acc.stats.tits;
}

if (acc.stats.waist !== "") {
  accStatsWaistInputEl.value = acc.stats.waist;
}

if (acc.stats.hips !== "") {
  accStatsHipsInputEl.value = acc.stats.hips;
}

if (acc.stats.weight !== "") {
  accStatsWeightInputEl.value = acc.stats.weight;
}

//Pay for sub through cabinet
const payForSubEl = document.querySelector(".pay-for-sub");
const statSelectEl = document.querySelector(".stat-select");
payForSubEl.addEventListener("click", () => {
  paymentInfoEl.classList.toggle("show");
  paymentDetailsNameEl.textContent = acc.name;
  paymentDetailsProgramEl.textContent = `Підписка ${
    subscriptions[statSelectEl.options.selectedIndex].price
  } грн`;
  paymentDetailsDurationEl.textContent =
    subscriptions[statSelectEl.options.selectedIndex].duration;
});

//Print program name on account page
const programNameEl = document.querySelector(".program-name");
if (acc.programName !== "") {
  const programLeftTimeEl = document.querySelector(".program-left-time");
  const programLeftTimePEl = document.querySelector(".program-left-time-p");
  programNameEl.textContent = `"${acc.programName}"`;
  programLeftTimePEl.classList.toggle("show");
  programLeftTimeEl.textContent = `${acc.programDuration} дня`;
} else {
  programNameEl.textContent = "ще немає 😔";
}
