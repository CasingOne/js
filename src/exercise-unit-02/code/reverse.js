/*

challenges - programming_basics_reverse_string

reverse.js
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().

Например:
import reverse from './reverse';

    reverse('str');    // rts
    reverse('hexlet'); // telxeh

Подсказки
Чтобы узнать длину строки, используйте свойство length:
    'welcome'.length; // 7

Чтобы получить подстроку из строки, используйте метод slice():
    'welcome'.slice(1, 4); // 'elc';

*/

const reverse = (str) => {

    let string = String(str);
    let result = '';

    for (let i = string.length; i >= 1; i--)
    {
        result = result + string.slice(i-1, i);
    }
    return result;
}

console.log(reverse('str'));        // rts
console.log(reverse('hexlet'));     // telxeh

//console.log('welcome'.slice(1, 2));