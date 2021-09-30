/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 14. Вложенные циклы

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих
уникальных значений в обоих массивах. Подсказки: Для получения массива без повторяющихся элементов, используйте
uniq из библиотеки lodash. В целях обучения и прокачки, решите это упражнение с помощью вложенных циклов.

Примеры:
// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3

// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1

// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2

// Нет элементов
getSameCount([], []); // 0

*/

import _ from 'lodash';

/*
const getSameCount = (array1, array2) => {

    // создаём пустой массив, в который поместим два вложенных массива: array1 и array2
    const array = [];
    // создаём пустой массив, в котором потом склеим 2 массива array1 и array2 через вложенные циклы
    const newArray = [];
    // удаляем повторяющиеся данные из массивов array1 и array2, и помещаем их в массив array
    array.push(_.uniq(array1));
    array.push(_.uniq(array2));

    //console.log(_.uniq(array1));
    //console.log(_.uniq(array2));

    // при помощи вложенного цикла склеиваем 2 вложенных массива в один массив newArray
    for (const item of array) {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                newArray.push(subItem);
            }
        } else {
            newArray.push(item);
        }
    }
    // для того, чтобы узнать сколько общих повторяющиеся элементов было в двух массивах
    // нужно вычесть из длинны массива newArray (без повторений array1 и array2) длинну
    // массива newArray без повторяющихся значений

    //console.log(newArray);
    //console.log(_.uniq(newArray));

    return console.log((newArray.length) - (_.uniq(newArray).length));
}
*/

const getSameCount = (array1, array2) => {
    /*
    if ((array1.length === 0) || (array2.length === 0)) {
        return console.log(0);
    }
    */
    const array = [];
    const newArray = [];
    array.push(_.uniq(array1));
    array.push(_.uniq(array2));

    for (const item of array) {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                newArray.push(subItem);
            }
        } else {
            newArray.push(item);
        }
    }
    return console.log((newArray.length) - (_.uniq(newArray).length));
}

// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]);    // 3
// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]);             // 1
// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]);     // 2
// Нет элементов
getSameCount([], []);                           // 0