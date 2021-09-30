/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 20. Rest-оператор и деструктуризация

arrays.js
Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его. Эта функция
реализуется просто и мы уже делали подобное ранее. Сейчас же мы учимся использовать rest-оператор. Используйте его
вместе с деструктуризацией, для извлечения первого элемента и всех остальных. Первый элемент становится
начальным значением максимального, а остальные перебираются в цикле для определения максимального.

Примеры
import { getMax } from '../arrays.js';

// Для пустого массива возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10

*/

export const getMax = (array) => {

    if (array.length === 0) {
        return null;
    }
    if (array.length === 1) {
       let [answer,] = array;
        return answer;
    }

    let answer;
    let [maxNumber, ...restArray] = array;

    for (let number of restArray)
    {
        if (maxNumber > number) {
            answer = maxNumber;
        }
        if (maxNumber < number) {
            //maxNumber = number;
            //answer = maxNumber;
            answer = maxNumber = number;
        }
    }
    return answer;
}

console.log(getMax([])); // null
console.log(getMax([1, 10, 8])); // 10

console.log(getMax([1])); // 1
console.log(getMax([1, 10, 8, 7, 90, 2, 21, 3, 11])); // 90