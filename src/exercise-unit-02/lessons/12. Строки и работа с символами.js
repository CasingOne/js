/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 02_Введение в программирование
// 12. Строки и работа с символами

reverse.js
Реализуйте функцию reverse(), которая переворачивает строку. Например:
    reverse('hello, world!'); // !dlrow ,olleh
Подсказки:
Длина строки str находится так: str.length
Не забудьте: индексы начинаются с 0, но длина — это реальная длина. Так что индекс последнего символа не совпадает с длиной строки
*/

// variant 1
const reverse = (string) => {
    let length = string.length - 1;
    let result = '';
    while (length >= 0) {
        result = result + string[length];
        length = length - 1;
        }
    return result;
}
console.log (reverse('hello, world!'));

// variant 2
const reverse2 = (string) => {
    let index = 0;
    let result = '';
    while (index < string.length) {
        result = string[index] + result;
        index = index + 1;
    }
    return result;
}
console.log (reverse2('hello, world!'));

// variant 3
const reverse3 = (string) => {

    let result = '';
    for  (let index = 0; index < string.length; index = index + 1) {
        result = string[index] + result;
    }
    return result;
}
console.log (reverse3('hello, world!'));


/*
// Решение учителя
// @ts-check
// BEGIN
// Visualize Execution: https://goo.gl/8pNRk2
const reverse = (str) => {
    let i = str.length - 1;
    let result = '';

    while (i >= 0) {
        result = result + str[i];
        i = i - 1;
    }
    return result;
};
// END
*/
