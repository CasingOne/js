/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 16. Сортировка массивов

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая сортирует массив используя пузырьковую сортировку.
Постарайтесь не подглядывать в текст теории и попробуйте воспроизвести алгоритм по памяти.

Примеры
import bubbleSort from '../arrays';

bubbleSort([]); // []
bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10]

*/

export const bubbleSort = (array) => {

    let steps = array.length-1;
    let swap;

    do {
        swap = false;
        for (let i=0; i < steps; i++)
        {
            if (array[i] > array[i+1])
            {
                const tempItem = array[i];
                array[i] = array[i+1];
                array[i+1] = tempItem;
                swap = true;
            }
        }
        steps--;
    } while (swap === true);

    return console.log(array);
}

bubbleSort([]);                 // []
bubbleSort([3, 10, 4, 3]);      // [ 3, 3, 4, 10 ]
bubbleSort([3, 2, 10, -2, 0]);  // [ -2, 0, 2, 3, 10 ]

bubbleSort(['a','c','w','W','d','b', -2, 0]);  // [ -2, 0, 2, 3, 10 ]