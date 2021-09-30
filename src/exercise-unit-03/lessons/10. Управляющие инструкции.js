/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 10. Управляющие инструкции

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название
валюты и возвращает сумму денег указанной валюты. Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

Массив, содержащий купюры разных валют с различными номиналами
Наименование валюты
Примеры

const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135

const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
getTotalAmount(money3, 'rub') // 270

Подсказки
Названия валют состоят из 3-х символов.

Для извлечения подстроки из строки используйте метод slice().

const str = 'some text';
str.slice(1, 6); // 'ome t'
str.slice(7);    // 'xt'

*/

//import addPrefix from './arrays.js';

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];

const getTotalAmount = (wallet, currency) => {

    let totalInWallet = 0;

    for (const money of wallet) {
        if (money.slice(0,3) !== currency ) {
            continue;
        }
        totalInWallet += Number(money.slice(4));
    }
    return console.log(totalInWallet);
}

getTotalAmount(money1, 'usd') // 16
getTotalAmount(money2, 'eur') // 135
getTotalAmount(money3, 'rub') // 270