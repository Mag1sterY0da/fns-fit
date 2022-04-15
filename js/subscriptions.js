// Subscriptions and auto add info about them
const subscriptions = [
  {
    price: 150,
    duration: `на місяць`,
  },
  {
    price: 550,
    duration: `на пів року`,
  },
  {
    price: 1100,
    duration: `на рік`,
  },
];

const subscriptionsPriceEl = [
  document.querySelector(".subscription-1-price"),
  document.querySelector(".subscription-2-price"),
  document.querySelector(".subscription-3-price"),
];

const subscriptionsDurationEl = [
  document.querySelector(".subscription-1-duration"),
  document.querySelector(".subscription-2-duration"),
  document.querySelector(".subscription-3-duration"),
];

subscriptions.forEach((sub, i) => {
  subscriptionsPriceEl[i].textContent = sub.price;
  subscriptionsDurationEl[i].textContent = sub.duration;
});

// Subscription open/close
const paymentChooseEl = document.querySelector(".payment-choose");
const subscriptionBuyEl = document.querySelector(".subscription-buy");
const closeSubscriptionWinEl = document.querySelector(
  ".close-subscription-win"
);

paymentChooseEl.addEventListener("click", () => {
  subscriptionBuyEl.classList.toggle("show");
});

closeSubscriptionWinEl.addEventListener("click", () => {
  subscriptionBuyEl.classList.toggle("show");
});

// Payment open/close
let subscriptionsEls = document.querySelectorAll(".subscription");
const paymentInfoEl = document.querySelector(".payment-info");
const closePaymentWin = document.querySelector(".close-payment-win");

subscriptionsEls.forEach((el) => {
  el.addEventListener("click", () => {
    subscriptionBuyEl.classList.toggle("show");
    paymentInfoEl.classList.toggle("show");
  });
});

closePaymentWin.addEventListener("click", () => {
  paymentInfoEl.classList.toggle("show");
});

//Payment info
const paymentDetailsNameEl = document.querySelector(".payment-details-name");
const paymentDetailsProgramEl = document.querySelector(
  ".payment-details-program"
);
const paymentDetailsDurationEl = document.querySelector(
  ".payment-details-duration"
);
subscriptionsEls.forEach((sub) => {
  sub.addEventListener("click", () => {
    paymentDetailsNameEl.textContent = acc.name;
    paymentDetailsProgramEl.textContent = `Підписка ${
      sub.querySelector("[class$=price]").textContent
    } грн`;
    paymentDetailsDurationEl.textContent =
      sub.querySelector("[class$=duration]").textContent;
  });
});
