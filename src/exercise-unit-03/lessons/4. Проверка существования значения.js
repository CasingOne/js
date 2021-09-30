/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 3. Модификация

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, если индекс
существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null)


const cities = ['moscow', 'london', 'berlin', 'porto'];

get(cities, 1); // 'london'
get(cities, 4); // null
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'

Подсказки
Для параметров функции можно указывать значения по умолчанию прям при объявлении: (param = 'default value')

*/

//import { swap } from '../code/arrays.js';

const cities = ['moscow', 'london', 'berlin', 'porto'];

const get = (array, i, def = null) => {

    if (array[i] !== undefined ) {
        return console.log(array[i]);
    }
    else {
        return console.log(def);
    }
}

get(cities, 1); // 'london'
get(cities, 4); // null
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'


/*console.log(get(cities, 1));                     // 'london'
console.log(get(cities, 4));                     // null
console.log(get(cities, 10, 'paris'));      // 'paris'
console.log(get(cities, -1, 'oops'));       // 'oops'*/


