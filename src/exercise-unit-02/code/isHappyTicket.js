/*
challenges [02_Введение в программирование] programming_basics_happy_ticket

"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр.
Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например:
    33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6.
Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.

isHappyTicket.js
Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка).
Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true

Подсказки: Чтобы узнать длину строки, используйте свойство length:

    'welcome'.length; // 7

*/

const isHappyTicket = (num) => {

    const numlength = num.length;

    if (Number(numlength) % 2 !== 0) {
        return false;
    } else {

        let left = 0;
        let right = 0;
        let x = 0;
        let z = Number(numlength) - 1;

        for (let i=0; i < Number(numlength)/2; i++) {
            left = left + Number(num[x]);
            right = right + Number(num[z]);
            x=x+1;
            z=z-1;
        }
        return left === right;
    }
}

console.log(isHappyTicket('385916'));   // true
console.log(isHappyTicket('231002'));   // false
console.log(isHappyTicket('1222'));     // false
console.log(isHappyTicket('054702'));   // true
console.log(isHappyTicket('00'));       // true