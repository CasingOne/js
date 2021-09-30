/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 17. Окружение

Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.
Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).
Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true

comparers.js

Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.
Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0.
Подсказки

Функция bigLettersCount должна принимать на вход строку str и высчитывать количество заглавных символов в ней.
Вычисление длины строки: length(str).
Перевод строки в верхний регистр: toUpperCase(str).
Проверка на то, что символ в верхнем регистре: toUpperCase(char) === char;

*/

//import {square, getTriangleAreaN2} from "../code/myMathModule.js";
//import { length, toUpperCase } from './strings.js';

export const length = (str) => str.length;
export const toUpperCase = (str) => str.toUpperCase();

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let lettersCount = 0;
  for (let i=0; i < str.length; i++) {

    if (str[i] === ' ') {
      lettersCount = lettersCount + 1;
    }
    else if (toUpperCase(str[i]) === str[i]) {
      lettersCount = lettersCount + 1;
    } else {
      lettersCount = lettersCount + 0;
    }
  }
  return lettersCount;
  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if ( firstCount > secondCount) {
    return 1;
  }
  else if ( secondCount > firstCount) {
    return -1;
  }
  else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) => (
    compare(first, second) === 1);

export const lessThan = (first, second) => (
    compare(first, second) === -1);

export const isEqual = (first, second) => (
    compare(first, second) === 0);

///////////////////////////////////////////

console.log(greaterThan('AD', 'ad sd'));     // true, сравнение на > (больше)
console.log(greaterThan('AD', '   Ad sd'));  // false, сравнение на > (больше)
console.log(lessThan('ghe df', 'dfwe r D')); // true, сравнение на < (меньше)
console.log(isEqual('liSp', 'lisP'));        // true
console.log(lessThan('ghe df', 'dfwe r D')); // true




/*

// Решение учителя
import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  // BEGIN
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

export const greaterThan = (first, second) => (
    compare(first, second) === 1);

export const lessThan = (first, second) => (
    compare(first, second) === -1);

export const isEqual = (first, second) => (
    compare(first, second) === 0);

*/