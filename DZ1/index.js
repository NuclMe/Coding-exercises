let a = 7;
let b = 9;
console.log(a * b);

let c = 7;
let d = 9;

console.log(c / d);

let e = 3;
let f = 5;
console.log(e + f);

let e1 = '3';
let f1 = 5;

console.log(e1 + f1);

let e2 = 3;
let f2 = 0;

console.log(e2 / f2);

let e3 = 3;
let f3 = 'Hello';

console.log(e3 + f3);

let e4 = 3;
let f4 = 'Hello';

console.log(e3 * f3);

// let inputIn = document.querySelector('.i-8');
// let button = document.querySelector('.b-8');
// let divOut = document.querySelector('.out-8');

// button.onclick = function () {
//   let inputIn2 = inputIn.value;
//   divOut.innerHTML = inputIn2;
//   console.log(inputIn2);
// };

// let inputIn3 = document.querySelector('.i-9');
// let button2 = document.querySelector('.b-9');
// let divOut2 = document.querySelector('.out-9');

// button2.onclick = function () {
//   let inputIn4 = inputIn3.value;
//   divOut2.innerHTML = inputIn4;
//   inputIn3.value = '';
//   console.log(inputIn4);
// };

// let inputIn = document.querySelector('.i-10');
// let button = document.querySelector('.b-10');
// let divOut = document.querySelector('.out-10');

// button.onclick = function () {
//   let inputIn2 = inputIn.value;
//   divOut.innerHTML = inputIn2 * 20;
//   console.log(inputIn2);
// };

// let inputIn = document.querySelector('.i-11');
// let button = document.querySelector('.b-11');
// let divOut = document.querySelector('.out-11');

// button.onclick = function () {
//   let inputIn2 = inputIn.value;
//   divOut.innerHTML = inputIn2 + 55;
//   console.log(inputIn2);
// };

// let inputName = document.querySelector('.i-12');
// let inputSurname = document.querySelector('.i-13');
// let button = document.querySelector('.b-12');
// let divOut = document.querySelector('.out-12');

// button.onclick = function () {
//   let inputIn2 = inputName.value;
//   let inputIn3 = inputSurname.value;
//   divOut.innerHTML = `Hello, ${inputIn2} ${inputIn3}`;
// };

// let inputFirstNumber = document.querySelector('.i-13-1');
// let inputSecondNumber = document.querySelector('.i-13-2');
// let button = document.querySelector('.b-13');
// let divOut = document.querySelector('.out-13');

// button.onclick = function () {
//   let inputIn2 = +inputFirstNumber.value;
//   let inputIn3 = +inputSecondNumber.value;
//   divOut.innerHTML = inputIn2 + inputIn3;
// };

// let inputIn = document.querySelector('.i-14');
// let button = document.querySelector('.b-14');

// button.onclick = function () {
//   inputIn.value = 'Go';
// };

// let button = document.querySelector('.b-15');

// button.onclick = function t15() {
//   button.style.border = '4px solid red';
// };

// let inputFirstNumber = document.querySelector('.i-16-1');
// let inputSecondNumber = document.querySelector('.i-16-2');
// let button = document.querySelector('.b-16');
// let divOut = document.querySelector('.out-16');

// button.onclick = function () {
//   let inputIn2 = inputFirstNumber.value;
//   let inputIn3 = inputSecondNumber.value;
//   divOut.innerHTML = inputIn2 + inputIn3;
// };

// let inputFirstNumber = document.querySelector('.i-17');
// let button = document.querySelector('.b-17');

// button.onclick = function () {
//   let inputIn2 = inputFirstNumber.value;
//   console.log(inputIn2);
// };

// let input = document.querySelector('.i-18');
// let button = document.querySelector('.b-18');
// let divOut = document.querySelector('.out-18');

// button.onclick = function () {
//   let a = input.value;
//   divOut.innerHTML = parseFloat(a);
// };

// let inputFirstNumber = document.querySelector('.i-19-1');
// let inputSecondNumber = document.querySelector('.i-19-2');
// let button = document.querySelector('.b-19');
// let divOut = document.querySelector('.out-19');

// button.onclick = function () {
//   let inputIn2 = inputFirstNumber.value;
//   let inputIn3 = inputSecondNumber.value;
//   divOut.innerHTML = parseInt(inputIn2) + parseInt(inputIn3);
// };

let button = document.querySelector('.b-20');
let divOut = document.querySelector('.out-20');
let count = 0;

button.onclick = function () {
  count++;
  divOut.innerHTML = count;
};
