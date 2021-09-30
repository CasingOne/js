/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 10. Итеративный процесс

smallestDivisor.js
Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа.
Число, передаваемое в функцию, больше нуля. Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом
является единица (наименьшим делителем которой является также единица).
Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17

Идея алгоритма:
Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само
(не считая 1)
Подсказки
Вспомните про оператор % (modulus or остаток от деления) из урока 5. Он вычисляет остаток от деления одного операнда на
другой. Например, 11 % 5 это 1, а 10 % 2 это 0.

Так что если x % y это 0, то y делит x без остатка.

*/

const smallestDivisor = (number) => {

    if (number === 1) {
        return 1;
    }

    const iter = (number, delitel) => {
        if (number % delitel === 0) {
            return delitel;
        }
        return iter(number, delitel + 1);
    };
    return iter(number, 2);
}

console.log(smallestDivisor(15));
console.log(smallestDivisor(17));


/*
// Решение учителя
// @ts-check
const smallestDivisor = (num) => {
    // BEGIN
    // Visualize Execution: https://goo.gl/Mc68MA
    const iter = (acc) => {
        // We use 'num / 2' in the condition below, and not 'num'.
        // This is a simple optimization: a number cannot be divided
        // by a number larger than its half.
        if (acc > num / 2) {
            return num;
        }
        if (num % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    };
    return iter(2);
    // END
};
*/


export default smallestDivisor;
