/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 9. Рекурсия

sequenceSum.js
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел.
Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности.
Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3

Подсказки
Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой".
Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)

// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);
// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
В файле sequenceSum.test.js можно посмотреть все варианты параметров, с которыми будет вызвана ваша функция.

*/

const sequenceSum = (begin, end) => {

    if (begin > end) {
        return NaN;
    } else if (begin === 0 && end === 0) {
        return 0;
    } else if (begin === end) {
        return begin;
    }
        // else if ((begin - end) === 0) {
        //     return sum;
    // }
    else {
        return end + sequenceSum(begin, end - 1);
    }
}

/*

// Решение учителя
// @ts-check
const sequenceSum = (begin, end) => {
    // BEGIN
    // Visualize Execution: https://goo.gl/UlTxCs
    if (begin > end) {
        return NaN;
    }
    if (begin === end) {
        return begin;
    }
    return begin + sequenceSum(begin + 1, end);
    // END
};
export default sequenceSum;
*/


console.log(sequenceSum(1, 5));
console.log(sequenceSum(4, 10));
console.log(sequenceSum(-3, 2));
console.log('');
console.log(sequenceSum(7, 2));
console.log(sequenceSum(0, 0));
console.log(sequenceSum(6, 6));