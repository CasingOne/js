/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 13. Цикл for и изменение переменных

isPrime.js
Напишите функцию isPrime(). Она принимает число и возвращает true, если число является простым, и false в ином случае.
Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
Используйте цикл for и арифметические шорткаты.

isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false
(Число 1 не считаем простым).

b *= a;    // same as b = b * a
b += a;    // same as b = b + a
b -= a;    // same as b = b - a
b %= a;    // same as b = b % a

*/

const isPrime = (number) => {

    if (number <= 1) return false;
    // if (number === 1) return false;
    // if (number <= 0) return NaN;

    let delitel = 2;
    for (; number % delitel !== 0;) { delitel += 1 } // delitel = delitel + 1

    if (delitel < number) return false;
    if (delitel === number) return true;

}

console.log (isPrime(1));
console.log (isPrime(7));
console.log (isPrime(10));
console.log ('');
console.log (isPrime(2017));

console.log (isPrime(-3));

/*
// Решение учителя
// @ts-check
// BEGIN
const isPrime = (number) => {

    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};
// END
*/

export default isPrime;