/*
challenges [02_Введение в программирование] intro_to_programming_perfect_numbers

isPerfect.js
Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число).
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

Подсказка: Читайте статью "Совершенное число" в Википедии

Список совершенных чисел:

6,
28,
496,
8128,
33 550 336,
8 589 869 056,
137 438 691 328,
2 305 843 008 139 952 128,
2 658 455 991 569 831 744 654 692 615 953 842 176,
191 561 942 608 236 107 294 793 378 084 303 638 130 997 321 548 169 216,

*/

//import {square, getTriangleAreaN2} from "../code/myMathModule.js";

const isPerfect = (num) => {

  let E = 0;
  let sum = 0;

  while (sum < num) {
    if (num % sum === 0) {
      //console.log(sum);
      E = E + sum;
    }
    sum++;
  }

 // if (E === num) { return true; } else { return false; }
  return E === num;
}

console.log(isPerfect(1));          // false
console.log(isPerfect(2));          // false
console.log(isPerfect(3));          // false
console.log(isPerfect(4));          // false
console.log(isPerfect(5));          // false

console.log(isPerfect(6));          // true
console.log(isPerfect(28));         // true
console.log(isPerfect(496));        // true
console.log(isPerfect(33550336));   // true
