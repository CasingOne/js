/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 6. Ссылки

arrays.js
Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в
обратном порядке.

Примеры
import { reverse } from './arrays';

const names = ['john', 'smith', 'karl'];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

Подсказки
Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний,
второй и предпоследний и так далее до середины.

*/

//import addPrefix from './arrays.js';

const names = ['john', 'smith', 'karl'];
const numbers = ['1', '2', '3', '4', '5'];

const reverse = (array) => {

    let z = array.length-1;

    for (let i=0; i<array.length;) {

        if (i === z) {
            return array;
        }

        let tmpI = array[i];
        let tmpZ = array[z];

        array[i] = tmpZ;
        array[z] = tmpI;

        i++;
        z--;
    }
    return array;
}

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']
reverse(names);
console.log(names); // => ['john', 'smith', 'karl']

reverse(numbers);
console.log(numbers); // => ['karl', 'smith', 'john']
reverse(numbers);
console.log(numbers); // => ['john', 'smith', 'karl']