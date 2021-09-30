/*
challenges [02_Введение в программирование] programming_basics_happy_numbers

Счастливые числа
Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в
единицу. Например:

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.

Вывод: исходное число 7 - счастливое.

8   => 8^2 = 64
64  => 6^2 + 4^2 = 36 + 16 = 52
52  => 5^2 + 2^2 = 25 + 4 = 29
29  => 2^2 + 9^2 = 4 + 81 = 85
85  => 8^2 + 5^2 = 64 + 25 = 89
89  => 8^2 + 9^2 = 64 + 81 = 145
145 => 1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
42  => 4^2 + 2^2 = 16 + 4 = 20
20  => 2^2 + 0^2 = 4 + 0 = 4
4  => 4^2 = 16
16  => 1^2 + 6^2 = 1 + 36 = 37

Вывод: исходное число 8 - несчастливое.

isHappyNumber.js
Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
Количество итераций процесса поиска необходимо ограничить числом 10.

Подсказки
Воспользуйтесь вспомогательной функцией sumOfSquareDigits(), которая принимает на вход число и возвращает
"сумму квадратов цифр" этого числа.
Длина строки str находится так: str.length

*/

const sumOfSquareDigits = (num) => {

  let sum = 0;
  let numLenght = String(num).length;
  let numString = String(num);

  if (numLenght <= 1) {
    return num ** 2;
  }
  else {
    for (let i = 0; i < numLenght; i++) {

      sum = sum + (Number(numString[i]) ** 2);
    }
    return sum;
  }
}
//console.log(sumOfSquareDigits(7));     // 49


const isHappyNumber = (num) => {

  for ( let i = 0; i < 10; i++) {
   num = sumOfSquareDigits(num);
  }

  if (num === 1) {
    return `true ${num}`;
  }
  else {
    return `false ${num}`;
  }
}
console.log(isHappyNumber(7));     // true
console.log(isHappyNumber(8));     // false