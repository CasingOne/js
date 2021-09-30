/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 17. Стек

strings.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и
закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки
должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной. Функция должна поддерживать,
минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.
Подсказки: Решение учителя использует метод indexOf

import isBracketStructureBalanced from './strings.js';

// Пример вложенности
isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false

*/

/*
const checkIfBalanced = (expression) => {
    // Инициализация стека
    const stack = [];
    // Проходим по каждому символу в строке
    for (const symbol of expression) {
        // Смотрим открывающий или закрывающий
        if (symbol === '(') {
            stack.push(symbol);
        } else if (symbol === ')') {
            // Если для закрывающего не нашлось открывающего, значит баланса нет
            if (!stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(checkIfBalanced('('));
console.log(checkIfBalanced(')('));
console.log(checkIfBalanced('()()'));
console.log(checkIfBalanced('((()))'));
console.log(checkIfBalanced('((())())'));
*/

let isBracketStructureBalanced = (string) => {

    let pattern = '()[]{}<>';
    let stack = [];

    for (let bracket of string) {
        let bracketIndex = pattern.indexOf(bracket);

        if (bracketIndex === -1){
            continue;
        }

        if (bracketIndex % 2 === 0) {
            stack.push(bracketIndex)
        } else {
            if(stack.pop() !== bracketIndex-1) {
                return console.log(false);
            }
        }
    }

    return console.log(stack.length === 0);
}

isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false