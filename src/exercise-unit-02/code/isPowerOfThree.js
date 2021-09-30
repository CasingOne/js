/*
challenges [02_Введение в программирование] programming_basics_power3

isPowerOfThree.js
Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью
тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Примеры:
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

*/

/*const isPowerOfThree = (number) => {

    let exponent = 0;
    let delitel = 3;

/!*    if (number <= delitel) {
        return false;
    }*!/

    while ( delitel ** exponent < number) {
        if (number % (delitel ** exponent) !== 0 || number < delitel) {
            return false;
        }
        exponent = exponent + 1;
    }

    if ( delitel ** exponent !== number ) {
        return false;
    }

    return `true (${delitel}^${exponent} = ${number})`;

}*/


const isPowerOfThree = (number) => {

    let exponent = 0;
    let delitel = 3;

    while ( delitel ** exponent < number) {
        exponent = exponent + 1;
    }

    if ( delitel ** exponent !== number ) {
        return false;
        //return `false (${delitel}^${exponent} ≠ ${number})`;
    }

    return `true (${delitel}^${exponent} = ${number})`;
}

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));


const isPowerOfNumbers = (number, expnum) => {

    let exponent = 0;

    while ( number ** exponent < expnum) {
        exponent = exponent + 1;
    }

    if ( number ** exponent !== expnum ) {
        return false;
    }

    return `true (${number}^${exponent} = ${expnum})`;
}

console.log(isPowerOfNumbers(2, 8));