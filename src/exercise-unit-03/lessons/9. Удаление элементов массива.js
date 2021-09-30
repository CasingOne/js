/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 9. Удаление элементов массива

arrays.js
Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов,
у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

Примеры
getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]

Подсказки
Проверка чётности - остаток от деления: item % 2 === 0 — чётное число.
Если на вход функции передан пустой массив, то она должна вернуть пустой массив.
Для работы с отрицательными числами может понадобиться функция нахождения модуля Math.abs

*/

//import addPrefix from './arrays.js';

const getSameParity = (array) => {

    if (array.length === 0) {
        return console.log([]);
    }

    let ifEvenness = (number) => Math.abs(number) % 2 === 0;
    let evenness = ifEvenness(array[0]);
    let newArray = [];

    for (const number of array) {

        if (ifEvenness(number) === evenness ) {
            newArray.push(number);
        }
    }
    return console.log(newArray);
}

getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]