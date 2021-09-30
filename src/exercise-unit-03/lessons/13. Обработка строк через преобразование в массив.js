/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 13. Обработка строк через преобразование в массив

strings.js
Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на
последовательность $#%! и возвращает полученную строку. Аргументы: "Текст" и "Набор стоп слов". Словом считается любая
непрерывная последовательность символов, включая любые спецсимволы (без пробелов). Подсказки: Тернарная операция может
сослужить вам хорошую службу в этой практике.

Примеры:

import makeCensored from '../strings';

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';

*/

const makeCensored = (array, censored) => {

    const words = array.split(' ');
    const newArray = [];

    for (const word of words) {

        if (word === censored[0] || word === censored[1] ) {
            newArray.push('$#%!');
        } else {
            newArray.push(word);
        }
    }
    return newArray.join(' ');
}

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
console.log(result);    // When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
console.log(result2);   // '$#%! chicken? chicken! $#%!';



