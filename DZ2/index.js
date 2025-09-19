// let input = document.querySelector('.i-1');
// let button = document.querySelector('.b-1');
// let divOut = document.querySelector('.out-1');

// button.onclick = function f1() {
//   let num = input.value;
//   if (num == 4) {
//     divOut.innerHTML = true;
//   } else {
//     divOut.innerHTML = false;
//   }
// };

// let a21 = 4;
// let b22 = 6;
// let button = document.querySelector('.b-21');
// let divOut = document.querySelector('.out-2');

// button.onclick = function f2() {
//   if (a21 > b22) {
//     divOut.innerHTML = a21;
//   } else {
//     divOut.innerHTML = b22;
//   }
// };

// let input = document.querySelector('.i-31');
// let input2 = document.querySelector('.i-32');
// let button = document.querySelector('.b-3');
// let divOut = document.querySelector('.out-3');

// button.onclick = function f1() {
//   let num1 = input.value;
//   let num2 = input2.value;

//   if (num1 > num2) {
//     divOut.innerHTML = num1;
//   } else {
//     divOut.innerHTML = num2;
//   }
// };

// let input = document.querySelector('.i-4');
// let button = document.querySelector('.b-4');
// let divOut = document.querySelector('.out-4');
// const myDate = new Date().getFullYear();

// button.onclick = function f1() {
//   let num = input.value;

//   if (myDate - num >= 18) {
//     divOut.innerHTML = 1;
//   } else {
//     divOut.innerHTML = 0;
//   }
// };

// let input = document.querySelector('.i-5');
// let button = document.querySelector('.b-5');
// let divOut = document.querySelector('.out-5');

// button.onclick = function f1() {
//   let num = input.value;

//   if (num < 0) {
//     divOut.innerHTML = 'm';
//   } else if (num >= 1) {
//     divOut.innerHTML = 1;
//   } else {
//     divOut.innerHTML = 0;
//   }
// };

// let input = document.querySelector('.i-6');
// let button = document.querySelector('.b-6');
// let divOut = document.querySelector('.out-6');

// button.onclick = function f1() {
//   let num = input.value;

//   if (num % 2 === 0) {
//     divOut.innerHTML = 'odd';
//   } else {
//     divOut.innerHTML = 'even';
//   }
// };

// let input = document.querySelector('.i-71');
// let input2 = document.querySelector('.i-72');
// let button = document.querySelector('.b-7');
// let divOut = document.querySelector('.out-7');

// button.onclick = function f1() {
//   let num = input.value;
//   let num2 = input2.value;

//   if (num2 > 0) {
//     divOut.innerHTML = Math.pow(num, num2);
//   } else {
//     divOut.innerHTML = 'error';
//   }
// };

// let select = document.querySelector('.s-8');
// let button = document.querySelector('.b-8');
// let divOut = document.querySelector('.out-8');

// button.onclick = function f1() {
//   switch (select.value) {
//     case '1':
//       divOut.innerHTML = 'one';
//     case '2':
//       divOut.innerHTML = 'two';
//     case '3':
//       divOut.innerHTML = 'three';
//   }
// };

// let input = document.querySelector('.i-9');
// let button = document.querySelector('.b-9');
// let divOut = document.querySelector('.out-9');

// button.onclick = function f1() {
//   let val = input.value;
//   switch (true) {
//     case val >= 1 && val <= 32:
//       divOut.innerHTML = 1;
//       break;
//     case val >= 33 && val <= 43:
//       divOut.innerHTML = 2;
//       break;
//     case val >= 44 && val <= 64:
//       divOut.innerHTML = 3;
//       break;
//     default:
//       divOut.innerHTML = 0;
//   }
// };

// let select = document.querySelector('.s-100');
// let button = document.querySelector('.b-10');
// let divOut = document.querySelector('.out-10');
// let selectedFruit = select.value;

// button.onclick = function f1() {
//   let val = select.value;

//   if (val) {
//     divOut.innerHTML = val;
//   } else {
//     divOut.innerHTML = '';
//   }
// };

// let select = document.querySelector('.s-110');
// let divOut = document.querySelector('.out-11');

// select.onchange = function f1() {
//   let val = select.value;

//   if (val) {
//     divOut.innerHTML = val;
//   } else {
//     divOut.innerHTML = '';
//   }
// };

// let i120 = document.querySelector('.i-120');

// function f12() {
//   let v = i120.value;
//   document.querySelector('.out-12').innerHTML = typeof v;
// }
// document.querySelector('.b-12').onclick = f12;

// let i130 = document.querySelector('.i-130');

// function f130() {
//   let v = i130.value;
//   document.querySelector('.out-13').innerHTML = typeof v;
// }

// document.querySelector('.b-13').onclick = f130;

// let input = document.querySelector('.i-141');
// let input2 = document.querySelector('.i-142');
// let select = document.querySelector('.s-143');
// let divOut = document.querySelector('.out-14');

// function f14() {
//   let num1 = +input.value;
//   let num2 = +input2.value;
//   let val = select.value;

//   switch (true) {
//     case val === '+':
//       divOut.innerHTML = num1 + num2;
//       break;
//     case val === '-':
//       divOut.innerHTML = num1 - num2;
//       break;
//     case val === '/':
//       divOut.innerHTML = num1 / num2;
//       break;
//     case val === '*':
//       divOut.innerHTML = num1 * num2;
//       break;
//     default:
//       divOut.innerHTML = 0;
//   }
// }

// document.querySelector('.b-14').onclick = f14;

let select1 = document.querySelector('.s-151');
let select2 = document.querySelector('.s-152');
let select3 = document.querySelector('.s-153');
let divOut = document.querySelector('.out-15');

function f15() {
  let val1 = select1.value;
  let val2 = select2.value;
  let val3 = select3.value;

  switch (true) {
    case val3 === '&&':
      divOut.innerHTML = val1 && val2;
      break;
    case val3 === '||':
      divOut.innerHTML = val1 || val2;
      break;
  }
}

document.querySelector('.b-15').onclick = f15;
