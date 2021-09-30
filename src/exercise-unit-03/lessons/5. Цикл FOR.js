/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 5. Цикл FOR

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает
новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для
работы со строковыми элементами. После префикса автоматически добавляется пробел.

import addPrefix from './arrays.js';

const names = ['john', 'smith', 'karl'];

const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];

console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];

*/

//import addPrefix from './arrays.js';

const names = ['john', 'smith', 'karl'];

const addPrefix = (array, prefix) => {

    if (prefix === '' || prefix === undefined || prefix === null) {
        return array;
    } else {

        const newArray = [];
        for (let i=0; i<array.length; i++) {
            newArray.push(prefix + ' ' + array[i]);
        }
        return newArray;
    }

}

const newNames = addPrefix(names, 'Mr');

console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];