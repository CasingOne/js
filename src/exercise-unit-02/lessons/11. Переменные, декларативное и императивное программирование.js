/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 11. Переменные, декларативное и императивное программирование

invertCase.js
Напишите функцию smallestDivisor(). Она должна находить наименьший целый делитель числа.
Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой.
На этот раз реализуйте императивный итеративный процесс, что означает:
- не используйте рекурсию
- используйте переменные
- используйте цикл while
- Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17
smallestDivisor(0); // NaN
smallestDivisor(-3); // NaN

Примечания:
Если переданное в smallestDivisor() число меньше единицы, возвращайте NaN._

Алгоритм (идея алгоритма):
Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказки:
Вспомните про оператор % (modulus or остаток от деления) из урока 5. Он вычисляет остаток от деления одного операнда на другой.
Например, 11 % 5 это 1, а 10 % 2 это 0. Так что если x % y это 0, то y делит x без остатка.

*/

const smallestDivisor = (number) => {

    let delitel = 2;

    if (number === 1) {
        return 1;
    }
    if (number <= 0) {
        return NaN;
    }

    while (number % delitel !== 0) {
        delitel = delitel + 1;
    }
    return delitel;

}

console.log(smallestDivisor(15));
console.log(smallestDivisor(17));
console.log(smallestDivisor(0));
console.log(smallestDivisor(-3));

/*
// Решение учителя
// @ts-check
/!* eslint operator-assignment: off *!/
// BEGIN
const smallestDivisor = (num) => {
    if (num < 1) {
        return NaN;
    }
    if (num === 1) {
        return num;
    }

    let divisor = 2;

    while (num % divisor !== 0) {
        divisor = divisor + 1;
    }

    return divisor;
};
// END
*/


export default smallestDivisor;