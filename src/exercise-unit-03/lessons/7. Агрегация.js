/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 7. Агрегация

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).

Примеры
const coll1 = [8, 9, 21, 19, 18, 22, 7];
calculateSum(coll1); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27

В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression):

const coll = [];
calculateSum(coll); // 0


*/

//import addPrefix from './arrays.js';

const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];

const calculateSum = (array) => {

    let sum = 0;

    if (array.length === 0) {
        return console.log(sum);
    }

    for (let i=0; i<array.length; i++) {

        if (array[i] % 3 === 0) {
            sum = sum + array[i];
        }

    }
    return console.log(sum);
}

calculateSum(coll1); // 48
calculateSum(coll2); // 27