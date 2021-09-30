/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 19. Чистые функции

[ invertCase.js ]
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

Пример:
  invertCase('hello, world!'); // Hello, World!

Подсказки:
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str):
console.log('hello, world!'.toUpperCase());      // HELLO, WORLD!

*/

//import {square, getTriangleAreaN2} from "../code/myMathModule.js";

const solution2 = (string) => {

  const toUpperCase = (string) => string.toUpperCase();

  let result = '';

  for (let index = 0; index < string.length; index = index + 1) {
    if (index === 0 || string[index - 1] === ' ') {
      result = result + toUpperCase(string[index]);
    } else {
      result = result + string[index];
    }
  }
  return result;
}
console.log(solution2('hello, world!'));     // Hello, World!


const solution = (string) => {

  let result = '';

  for (let index = 0; index < string.length; index = index + 1) {
    if (index === 0 || string[index - 1] === ' ') {
      result = result + string[index].toUpperCase();
    } else {
      result = result + string[index];
    }
  }
  return result;
}
console.log(solution('hello, world!'));      // Hello, World!

export default solution;


/*
import { length, toUpperCase } from './strings.js';
// Решение учителя
// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END
*/
