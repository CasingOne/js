/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 19. Деструктуризация

location.js

На многих картах, например, google maps реализован поиск мест, находящихся рядом с выбранной точкой, например, с текущим
расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и
возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место - это массив из двух элементов, где первый элемент это название места,
второй – точка на карте (массив из двух чисел x и y).

point – текущая точка на карте. Массив из двух элементов-координат x и y.
import { getTheNearestLocation } from '../location.js';

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения
к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance.

*/

/*
const getDistance = ([x1, y1], [x2, y2]) => {
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.sqrt((a ** 2) + (b ** 2));
}
*/

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
}

export const getTheNearestLocation = (locations, currentPoint) => {

    let lowestDistance;
    let answer;

    if (locations.length === 0) {
        return null;
    }
    for (const item of locations) {

        const [, [x, y]] = item;

        if (lowestDistance === undefined) {
            lowestDistance = getDistance([x, y], currentPoint);
            answer = item;
        }
        if (getDistance([x, y], currentPoint) < lowestDistance) {
            lowestDistance = getDistance([x, y], currentPoint);
            answer = item;
        }
    }

    return console.log(answer);
}

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
    ['Me', [1, 1]],
    ['Me', [0, 5]],
];

const currentPoint = [5, 5];

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]