/*
challenges [02_Введение в программирование] intro_to_programming_sum_square_difference

sumSquareDifference.js

Сумма квадратов первых 10-ти натуральных чисел это   1^2 + 2^2 + 3^2 + ... + 10^2 = 385.
Квадрат суммы первых 10-ти натуральных чисел это     (1 + 2 + 3 + ... + 10)^2 = 552 = 3025.
Разница между квадратом суммы и суммой квадратов первых 10-ти натуральных чисел: 3025 − 385 = 2640.

Сумма квадратов первых 5-ти натуральных чисел это   1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55.
Квадрат суммы первых 5-ти натуральных чисел это     (1 + 2 + 3 + 4 + 5)^2 = 552 = 225.
Разница между квадратом суммы и суммой квадратов первых 5-ти натуральных чисел: 225 − 55 = 170

Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и
суммой квадратов первых n натуральных чисел.

*/

const sumSquareDifference = (n) => {

  let sumOfSquares = 0;
  let squareSum = 0;

  for (let i=1; i<=n; i++) {
    sumOfSquares = sumOfSquares + i ** 2;
    squareSum = squareSum + i;
  }
  return squareSum ** 2 - sumOfSquares;

}

console.log(sumSquareDifference(10));    // 2640
console.log(sumSquareDifference(5));     // 170