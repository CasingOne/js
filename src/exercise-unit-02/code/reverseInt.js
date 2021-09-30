/*

challenges - programming_basics_reverse_integer

[ invertCase.js ]
Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

Примеры:
    fizzBuzz(13); // 31
    fizzBuzz(-123); // -321
    fizzBuzz(8900); // 98

Подсказки:
Длина строки str находится так: str.length

*/

const reverseInt = (str) => {

    let string = String(str);
    let result = '';

    for (let i = string.length - 1; i >= 0; i--)
        if (string[i] === '-') {
            result = string[i] + result;
        }
        else if (string[i] === '0' ) {
            result = '' + result;
        } else {
            result = result + string[i];
        }

    return result;
}

console.log(reverseInt(13));    // 31
console.log(reverseInt(-123));  //-321
console.log(reverseInt(8900));  // 98

//console.log(fizzBuzz('-ABC-000-'));