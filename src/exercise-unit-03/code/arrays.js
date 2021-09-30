/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 3. Модификация

arrays.js
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
Если массив содержит меньше двух элементов, то он возвращается как есть.

Примеры
import { swap } from '../arrays';

swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
Подсказки
Чтобы поменять местами значения, нужно использовать третью переменную

*/

export const swap = (array) => {

  if (array.length > 1) {

    let firstObject = array[0];
    array[0] = array[array.length - 1];
    array[array.length-1] = firstObject;

    return array;

  } else {
    return array;
  }
}

/*
export const swap = (array) => {

  if (array.length > 1) {

    let firstObject = array[0];
    let lastObject = array[array.length-1];

    array[0] = lastObject;
    array[array.length-1] = firstObject;
    return array;

  } else {
    return array;
  }

}
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

  return array;
}