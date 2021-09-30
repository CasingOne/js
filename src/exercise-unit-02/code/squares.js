/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 16. Выражения и инструкции

[ squares.js ]
Реализуйте функцию square(), которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.

Примеры работы функций:

  square(5); // 25
  square(10); // 100
  sumOfSquares(5, 10); // 125
  sumOfSquares(10, -9); // 181
  squareSumOfSquares(1, 1); // 4
  squareSumOfSquares(2, 3); // 169

Обратите внимание на то, что самостоятельно вызывать их не надо.
Это делает проверяющая система в файле __tests__/squares.tests.js

Подсказки:
Функция square() может быть использована внутри sumOfSquares()
Функция sumOfSquares() может быть использована внутри squareSumOfSquares()

*/

const square = (num) => {
  //return num * num;
  return num ** 2;
}

const sumOfSquares = (x, y) => {
  return square(x) + square(y);
}

const squareSumOfSquares = (x, y) => {
  return square(sumOfSquares(x, y));
}

console.log(square(5));                   // 25
console.log(square(10));                  // 100
console.log(sumOfSquares(5,10));         // 125
console.log(sumOfSquares(10,-9));        // 181
console.log(squareSumOfSquares(1,1));     // 4
console.log(squareSumOfSquares(2,3));     // 169