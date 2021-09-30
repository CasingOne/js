/*
challenges [02_Введение в программирование] programming_basics_ackermann

Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.
Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число.
Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа
многократно превосходит количество атомов в наблюдаемой части Вселенной.

Функция Аккермана определяется рекурсивно для неотрицательных целых чисел m и n следующим образом:


Мы будем использовать определение A(m,n) взятия двух неотрицательных целых чисел, где

A(0,n) = n+1
A(m,0) = A(m-1,1)
A(m,n) = A(m-1,A(m,n-1))


Python - A=lambda m,n:n+(m<1or A(m-1,n<1or A(m,n-1))-n)
JavaScript A=(m,n)=>m?A(m-1,!n||A(m,n-1)):n+1

Справа в формуле указаны условия при которых выполняются расчёты.

invertCase.js

Реализуйте и экспортируйте по умолчанию функцию Аккермана.
Примеры использования:

import ackermann from './invertCase';

ackermann(0, 0); // 1
ackermann(2, 1); // 5
ackermann(2, 3); // 9

*/

/*

Тернарный оператор
В JavaScript и многих других языках есть сокращённая версия if: она называется тернарным оператором (ternary operator):

condition ? expression : expression

В этом случае есть только два условия и два варианта: один для true и один для false.

    const absValue = (num === 0 || num > 0) ? num : -num;

*/

//const f = (m,n) => m ? f(m-1,!n || f(m,n-1)) : n+1

//const A = (m,n) => m? A(m-1,!n || A(m,n-1)) : n+1

//const ackermann = (m,n) => m ? ackermann(m-1,!n || ackermann(m,n-1)) : n+1


/*
const ackermann = (m,n) => {

    if (m !== 0) {
        return ackermann(m-1,!n || ackermann(m,n-1));
    } else {
        return n+1;
    }
    return ackermann();
}
*/



const ackermann = (m,n) => {

    if (m === 0) {
        return n+1;
    }
    if (n === 0) {
       return ackermann (m-1, 1 );
    }
    return ackermann(m-1, ackermann(m,n-1));
}


console.log(ackermann(0, 0));      // 1
console.log(ackermann(2, 1));      // 5
console.log(ackermann(2, 3));      // 9



//console.log(f(0, 0));      // 1
//console.log(f(2, 1));      // 5
//console.log(f(2, 3));      // 9
