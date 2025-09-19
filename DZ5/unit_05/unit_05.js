//  Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
let divOut1 = document.querySelector('.out-1');
let out = '';
function t1() {
  for (let i = 1; i <= 16; i++) {
    out += i + '_';
  }
  divOut1.innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
//Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let divOut2 = document.querySelector('.out-2');
let out2 = '';

function t2() {
  for (let i = 12; i < 40; i = i + 2) {
    out2 += i + '_';
  }
  divOut2.innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let divOut3 = document.querySelector('.out-3');
let out3 = '';

function t3() {
  for (let i = 25; i >= 7; i = i - 1) {
    out3 += i + '_';
  }
  divOut3.innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let divOut4 = document.querySelector('.out-4');
let out4 = '';

function t4() {
  for (i = 77; i >= 35; i = i - 3) {
    out4 += i + '_';
  }
  divOut4.innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

let divOut5 = document.querySelector('.out-5');
let out5 = '';

function t5() {
  for (i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      out5 += i + '_**';
    } else {
      out5 += i + '_*';
    }
  }
  divOut5.innerHTML = out5;
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
let divOut6 = document.querySelector('.out-6');
let input = document.querySelector('.i-6');
let out6 = '';
let mybr = document.createElement('br');
function t6() {
  for (i = 0; i < input.value; i++) {
    out6 += '******<br>';
  }
  divOut6.innerHTML = out6;
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция t7, которая выводит в .out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.

let divOut7 = document.querySelector('.out-7');
let input2 = document.querySelector('.i-7');
let out7 = '';

function t7() {
  for (i = input2.value; i >= 0; i--) {
    out7 += i + '_';
  }
  divOut7.innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция t8, которая выводит в .out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//  4_5_6_7_8_
// Задача решается с помощью цикла.

let divOut8 = document.querySelector('.out-8');
let input3 = document.querySelector('.i-81');
let input4 = document.querySelector('.i-82');
let out8 = '';

function t8() {
  for (i = input3.value; i <= input4.value; i++) {
    out8 += i + '_';
  }
  divOut8.innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция t9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель - подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

let divOut9 = document.querySelector('.out-9');
let input5 = document.querySelector('.i-91');
let input6 = document.querySelector('.i-92');
let out9 = '';

function t9() {
  let start = parseInt(input5.value);
  let finish = parseInt(input6.value);
  let min = Math.min(start, finish);
  let max = Math.max(start, finish);
  for (let i = min; i <= max; i++) {
    out9 += i + '_';
  }
  divOut9.innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;

let divOut10 = document.querySelector('.out-10');
let out10 = '';

//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1970 включительно.
// Разделитель - знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
  for (i = 1950; i <= 1970; i++) {
    if (i % 2 === 0) {
      out10 += i + '-';
    }
  }
  divOut10.innerHTML = out10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка .b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11 в переменную divs11
// перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_

let divOut11 = document.querySelector('.out-11');
let divs = document.querySelectorAll('div.div-11');
let out11 = '';

function t11() {
  for (i = 0; i < divs.length; i++) {
    console.log(divs[i].innerHTML);
    out11 += divs[i].innerHTML + '_';
  }
  divOut11.innerHTML = out11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let divOut12 = document.querySelector('.out-12');
let elem = document.querySelectorAll('div.div-12');

function t12() {
  for (i = 0; i < elem.length; i++) {
    elem[i].style.background = 'orange';
  }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого, 2 для второго и 3 для третьего.
let inputs = document.querySelectorAll('input.i-13');

function t13() {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = i + 1;
  }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let elem2 = document.querySelectorAll('input.i-14');
let divOut14 = document.querySelector('.out-14');

function t14() {
  for (i = 0; i < elem2.length; i++) {
    if (elem2[i].checked) {
      divOut14.innerHTML = elem2[i].value;
    }
  }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Подсказка (10 - i) + '_' + i + '_'
let divOut15 = document.querySelector('.out-15');
let out15 = '';

function t15() {
  for (i = 0; i <= 10; i++) {
    out15 += 10 - i + '_' + i + '_';
  }
  divOut15.innerHTML = out15;
}

document.querySelector('.b-15').onclick = t15;
