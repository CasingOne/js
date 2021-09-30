/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 21. Spread-оператор и создание новых массивов

arrays.js
Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами
массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности. Реализуйте
добавление элементов вложенного массива в результирующий через spread-оператор. В js эта функция реализована как метод
flat() у массивов. Его использовать нельзя.

import { flatten } from '../arrays.js';

// Для пустого массива возвращается []
flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]

*/

// !!!не совсем правильная реализация!!!
const flatten = (array) => {

    let flattenArray = [];
    let spread = [];

    for (const item of array)
    {
        if (Array.isArray(item))
        {
            for (const subItem of item)
            {
               spread.push(subItem);
            }
        }
        else
        {
            spread.push(item);
        }
        flattenArray = [...spread];
    }
    return console.log(flattenArray);
}

flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]