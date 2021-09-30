/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 15. Теория множеств

strings.js
Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов
(без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего один символ — y.
А в строке 111yya! — используется четыре символа: 1, y, a и !. Подсказки: includes() – проверяет есть ли такой элемент
в массиве.

Примеры
const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0

*/

/*
// realise with _.uniq() from 'lodash' library
import _ from 'lodash';

const countUniqChars = (text) => {

    const symbolsArray = [];

    for (const oneSymbol of text) {
        symbolsArray.push(oneSymbol);
    }
    return console.log(_.uniq(symbolsArray).length);
}
*/

const countUniqChars = (text) => {

    const symbolsArray = [];
    const noGemenyArray = [];

    for (const oneSymbol of text) {
        symbolsArray.push(oneSymbol);
    }

    for (const symbol of symbolsArray) {
        if (noGemenyArray.includes(symbol) === false) {
            noGemenyArray.push(symbol);
        }
    }
    //console.log(noGemenyArray);
    return console.log(noGemenyArray.length);
}

const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0