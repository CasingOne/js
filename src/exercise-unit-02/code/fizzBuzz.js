/*
challenges [02_Введение в программирование] intro_to_programming_fizzbuzz

fizzBuzz.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin
до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно).
Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст
(в случае, когда begin > end), то функция просто ничего не печатает.

Вызов функции:

    fizzBuzz(11, 20);

Вывод в терминале:
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz

Это задание крайне часто задают на собеседованиях.

*/


/*
const fizzBuzz = (begin,end) => {

    if (begin > end) {
        return;
    }
    for (; begin <= end; begin++) {
        if (begin % 3 === 0 && begin % 5 === 0) {
            console.log('fizzBuzz');
        }
        else if (begin % 3 === 0 && begin % 5 !== 0) {
            console.log('Fizz');
        }
        else if (begin % 3 !== 0 && begin % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(begin);
        }
    }
    return fizzBuzz;
}
*/

const fizzBuzz = (begin,end) => {

    if (begin > end) return;
    for (; begin <= end; begin++)
        if      (begin % 3 === 0 && begin % 5 === 0) console.log('fizzBuzz');
        else if (begin % 3 === 0 && begin % 5 !== 0) console.log('Fizz');
        else if (begin % 3 !== 0 && begin % 5 === 0) console.log('Buzz');
        else                                         console.log(begin);
    return fizzBuzz;
}

fizzBuzz(11,20);