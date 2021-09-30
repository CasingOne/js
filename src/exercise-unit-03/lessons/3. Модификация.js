/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 3. Модификация

arrays.js
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
Если массив содержит меньше двух элементов, то он возвращается как есть.

Примеры
import { swap } from '../arrays';

swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
Подсказки
Чтобы поменять местами значения, нужно использовать третью переменную

*/

import { swap } from '../code/arrays.js';

console.log(swap([]));                       // []
console.log(swap([1]));                      // [1]
console.log(swap([1, 2]));                   // [2, 1]
console.log(swap(['one', 'two', 'three']));  // ['three', 'two', 'one']