/*
challenges [02_Введение в программирование] intro_to_programming_balanced_brackets

areBracketsBalanced.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку,
состоящую только из открывающих и закрывающих круглых скобок, и проверяет, является
ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
- Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
- Закрывающая скобка не должна идти впереди открывающей.

import areBracketsBalanced from 'roundBracketsValidator';
areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false

*/



/*
// тоже правильная функция, но немного с другим синтаксисом
const areBracketsBalanced = (brackets) => {

    if (brackets.length % 2 !== 0 ) {
        return false;
    }

    let indexL = 0;
    let indexR = brackets.length - 1;
    let count = 0;

    while (brackets.length / 2 > count) {
        if (brackets[indexL] === '(' && brackets[indexR] === ')' ) {
            indexL++;
            indexR--;
        }
        else {
            return false;
        }
        count++;
    }
    return true;
}
*/

const areBracketsBalanced = (brackets) => {

    if (brackets.length % 2 !== 0 ) {
        return false;
    }

    let indexL = 0;
    let indexR = brackets.length - 1;
    let count = 0;

    while (brackets.length / 2 > count++) {
        if (brackets[indexL] === '(' && brackets[indexR] === ')' ) {
            indexL++;
            indexR--;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(areBracketsBalanced('(())'));
console.log(areBracketsBalanced('((())'));