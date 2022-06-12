`use strict`;

let writeHash;

let customHash = document.querySelector(`#my-custom-hash`);
let firstPage = document.querySelector(`#firstPage`);
let goBack = document.querySelector(`#goBack`);
let goForward = document.querySelector(`#goForward`);

goBack.addEventListener(`click`, goBack);
goForward.addEventListener(`click`, goForward);
customHash.addEventListener(`click`, hashSet);
window.addEventListener(`popstate`, (e) => {
  console.log(`Navigation`);
});
firstPage = function () {
  history.pushState(null, null, `First Page`);
};
goForward = function () {
  history.forward();
};
goback = function () {
  history.back();
};
hashSet = function () {
  writeHash = document.querySelector(`#writeHash`).value;
  location.hash = writeHash;
  console.log(`#my-custom-hash was set!`);
  alert(`#my-custom-hash was set!`);
};
