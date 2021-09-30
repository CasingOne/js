/*
challenges [02_Введение в программирование] programming_basics_invert_case


[ invertCase.js ]

Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.
Примеры:
    invertCase('Hello, World!'); // hELLO, wORLD!
    invertCase('I loVe JS');     // i LOvE js
Подсказки:
Чтобы узнать длину строки, используйте свойство length:
    'welcome'.length; // 7
Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase():
    'foo'.toUpperCase(); // 'FOO';
    'f'.toUpperCase();   // 'F';
Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase():
    'BAR'.toLowerCase(); // 'bar';
    'b'.toLowerCase();   // 'b';
*/

//import {square, getTriangleAreaN2} from "../code/myMathModule.js";

const invertCase = (string) => {

  let result = '';

  for (let index = 0; index < string.length; index = index + 1) {
    if (string[index].toUpperCase() === string[index]) {
      result = result + string[index].toLowerCase();
    } else {
      result = result + string[index].toUpperCase();
    }
  }
  return result;
}

console.log(invertCase('Hello, World!'));  // hELLO, wORLD!
console.log(invertCase('I loVe JS'));      // i LOvE js

export default invertCase;