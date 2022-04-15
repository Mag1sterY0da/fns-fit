const acc = {
  name: "Olivia",
  email: "olivia@gmail.com",
  programName: "EASY FIT",
  programDuration: "54",
  stats: {
    tits: 85,
    waist: 64,
    hips: 105,
    weight: 50,
  },
};

//Print greeting on top of page
const greeting = `Привіт, @${acc.name.toLowerCase()} !`;
const greetingEl = document.querySelector(".greeting");
if (!!greetingEl) {
  greetingEl.textContent = greeting;
}
