/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 15. Модули (import and export in JS)

[ myMathModule.js ] В файле myMathModule.js:
Создайте функцию getTriangleAreaN2(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле
A = 1/2 * h * b, где h — высота, а b — основание треугольника.
Вычисление площади треугольника:
    getTriangleAreaN2(5, 10) === 25;
    getTriangleAreaN2(15, 12) === 90;
Экспортируйте функцию.

[ invertCase.js ] В файле invertCase.js:
Импортируйте функцию getTriangleAreaN2() из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n^2/2.
Используйте функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.

*/

import {square, getTriangleArea} from "../code/myMathModule.js";

const getTriangleAreaN2 = (n) => {

  let h = n;
  let b = square(n) / 2;

  //console.log('H = ', h, ' B = ', b);

  return getTriangleArea (h, b);
}

console.log(getTriangleAreaN2(20));

export default getTriangleAreaN2;