/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 18. Big O

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их
пересечение. Поиск пересечения двух неотсортированных массивов — операция, в рамках которой выполняется вложенный цикл
с полной проверкой каждого элемента первого массива на вхождение во второй.
Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов. Если массивы отсортированы,
то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.

Алгоритм: Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. Начальное
значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах. Если они
совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются. Если значение в первом массиве
больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.

Примеры:
getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
getIntersectionOfSortedArrays([], [2]); // []

*/

import {bubbleSort} from "../code/arrays.js";

const getIntersectionOfSortedArrays = (array1, array2) => {

    const array1sorted = bubbleSort(array1);
    const array2sorted = bubbleSort(array2);

    const resultArray = [];

    let x = 0;
    let y = 0;

    while (x <= array1.length - 1 && y <= array2.length - 1) {

        if (array1sorted[x] > array2sorted[y]) {
            y = y + 1;
        } else if (array1sorted[x] < array2sorted[y]) {
            x = x + 1;
        } else {
            resultArray.push(array1sorted[x]);
            x = x + 1;
            y = y + 1;
        }
    }
    return console.log(resultArray);
}

getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]);  // [10, 24]
getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]);                // []
getIntersectionOfSortedArrays([], [2]);                                 // []
// my example with non sorted array
getIntersectionOfSortedArrays([11, 10, 14, 18, 24, 30, 29],[10, 11, 24]);  // [10, 11, 24]