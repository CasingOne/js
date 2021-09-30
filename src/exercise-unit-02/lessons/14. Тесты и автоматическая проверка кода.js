/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 14. Тесты и автоматическая проверка кода

test.js
Проверьте с помощью утверждений (asserts) правильность работы функции factorial(),
которая вычисляет факториал переданного числа. Факториал числа x — это произведение всех чисел от 1 до x.
Например, факториал числа 4 это 1 * 2 * 3 * 4 = 24.

Подробнее о факториале можно почитать в википедии.
Саму функцию в этой практике реализовывать не надо, она уже готова.
Вам же сейчас надо дописать тесты для проверки её работы.
Несколько примеров:

factorial(0); // 1
factorial(1); // 1
factorial(5); // 120

Вам необходимо добавить минимум три дополнительные проверки (помимо уже существующих в модуле),
а именно: протестировать пограничные случаи (вызов с параметрами 0 и 1) и сделать проверку на
работу с другими неотрицательными целыми числами. Общепринятого факториала от целых отрицательных чисел не существует.

Подсказки
assert(<expression>) проверяет, что результат <expression> является истиной.
assert.equal(<actual>, <expected>) проверяет, что <actual> и <expected> равны (проверка на нестрогое равенство ==).

*/



// Функция факториала с циклом while:
const factorialW = (n) => {
    let counter = 1;
    let result  = 1;

    while (counter <= n) {
        result = result * counter;
        counter = counter + 1;
    }

    return result;
}


// result *= counter;    // то же, что result = result * counter
// result += counter;    // то же, что result = result + counter
// result -= counter;    // то же, что result = result - counter
// result %= counter;    // то же, что result = result % counter
//
// // Postfix
// let a = 3;
// let b;
// b = a++;    // b = 3, a = 4
//
// // Prefix
// let a = 3;
// let b;
// b = ++a;    // b = 4, a = 4
//
// let x = 5;
// let y = 10;
//
// console.log(x++ + ++y); // ответ 5 + 11 = 16


// Это обновлённая функция факториала:
const factorialWN = (n) => {
    let counter = 1;
    let result  = 1;

    while (counter <= n) {
        result *= counter;
        counter++;
    }

    return result;
}

// Это та же функция факториала, но с циклом for вместо цикла while:
const factorial = (n) => {

    let result  = 1;

    for (let counter = 1; counter <= n; counter++) {
        result *= counter;
    }

    return result;
}

// подключаем библиотеку assert
let assert = require('assert');

assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);

assert(factorial(0) !== 2);
assert(factorial(1) >= 1);
assert(factorial(5) === 120);



/*
// Решение учителя
import assert from 'assert';
import factorial from './functions.js';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);

// BEGIN
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(4), 24);
// END
*/
