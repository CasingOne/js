/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 8. Цикл for...of

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного
массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)

Примеры
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
calculateAverage(temperatures1); // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
calculateAverage(temperatures2); // 38
В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):

const temperatures = [];
calculateAverage(temperatures); // null

*/

//import addPrefix from './arrays.js';

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];
const temperatures = [];

const calculateAverage = (array) => {

    if (array.length === 0) {
        return console.log(null);
    }

    let temperature = 0;
    let index = 0;

    for (const celsius of array) {
        temperature = temperature + celsius;
        index++;
    }

    return console.log(temperature / index);
}

calculateAverage(temperatures1);    // 38.5
calculateAverage(temperatures2);    // 38
calculateAverage(temperatures);     // null