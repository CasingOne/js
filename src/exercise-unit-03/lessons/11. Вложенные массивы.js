/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 11. Вложенные массивы

Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72
(первая суперсерия) и в 74 годах (вторая суперсерия). В этом задании вам предстоит написать функцию, которая вычисляет
команду, выигравшую суперсерию.

superseries.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии.
Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии.
Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре
(сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'. Если суперсерия закончилась
в ничью, то нужно вернуть null. Подсказки: Решение учителя использует функцию Math.sign

import getSuperSeriesWinner from './superseries.js'
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];
getSuperSeriesWinner(scores); // 'canada'

*/


const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
];

const getSuperSeriesWinner = (scores) => {

    let canada = 0;
    let ussr = 0;

    for (const winner of scores) {

        // (winner[0]>winner[1])||(winner[0]<winner[1])?canada+=1:ussr+=1;

        if (winner[0] > winner[1]) {
            canada += 1;
        }
        if ((winner[0] < winner[1])) {
            ussr += 1;
        }
    }

    if (canada > ussr ) {
        return console.log('canada');
    }
    if (canada < ussr ) {
        return console.log('ussr');
    }
    if (canada === ussr ) {
        return console.log(null);
    }
}

getSuperSeriesWinner(scores); // 'canada'