/*
challenges [02_Введение в программирование] programming_basics_without_two_zeros


solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество
единиц, и определяет сколько есть способов размещения этих нулей и единиц так, чтобы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения:
0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100.
Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:

import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3); // 4
withoutTwoZeros(2, 4); // 10

Подсказки:
https://ru.wikipedia.org/wiki/Сочетание
https://youtu.be/F_0DwN--bTM?t=3109

*/

//import {square, getTriangleArea} from "./myMathModule.js";

// var 1
const withoutTwoZeros = (a, b) => {

  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }
  
  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};


// var2
/*
const factorial = (num) => {
  let acc = 1;
  while (num > 0) {
    acc *= num;
    num--;
  }
  return acc;
}
const withoutTwoZeros = (k0, k1) => {
  const func = (n, k) => {
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
  if (k0 === 0) {
    return 1;
  }
  if (k0 === 1) {
    return k1 + 1;
  }
  if ((k0 - k1) >= 2) {
    return 0;
  }
  return func(k1 + 1, k0);
}
*/

console.log(withoutTwoZeros(2, 2)); // 3
console.log(withoutTwoZeros(1, 1)); // 2
console.log(withoutTwoZeros(1, 3)); // 4
console.log(withoutTwoZeros(2, 4)); // 10

export default withoutTwoZeros;