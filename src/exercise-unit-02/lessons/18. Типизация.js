/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 18. Типизация

[ addDigits.js ]
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Примеры
addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8

Подсказки
Выделите процесс суммирования цифр в числе в отдельную функцию

*/

//import {square, getTriangleAreaN2} from "../code/myMathModule.js";

// version 1 ( 1 function )
const addDigits2 = (num) => {

  let number = String(num);
  let length = number.length;
  let sum = 0;

  //console.log(number);
  //console.log(length);

  if (length < 2) {
    return num;
  }

  for (let i = 0; length > i; i++) {
    //sum = sum + Number(number[i]);
    sum += Number(number[i]);
  }
  return addDigits(sum);
}


// version 2 ( 2 functions)
const sumDigits = (num) => {

  let number = String(num);
  let length = number.length;
  let sum = 0;

  for (let i = 0; length > i; i++) {
    sum += Number(number[i]);
  }
  return sum;
}

const addDigits = (num) => {

  while (num >= 10) {
    num = sumDigits(num);
  }

  return num;
}

console.log(addDigits(10));      // 1
console.log(addDigits(19));      // 1
console.log(addDigits(38));      // 2
console.log(addDigits(1259));    // 8

/*
// Решение учителя
import { length } from './strings.js';

// BEGIN
const sumDigits = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sumDigits(result);
  }

  return result;
};

export default addDigits;
// END
*/