/*
challenges [02_Введение в программирование] intro_to_programming_angle_difference

Напишите функцию diff(), которая принимает два угла (integer),
каждый от 0 до 360, и возвращает разницу между ними.

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;

*/

const diff = (a, b) => {

    // Проверка на валидность входных данных
    if ( a > 360 || b > 360 ) {
        return 'Недопустимые параметры!'
    }

    //let angle = Math.abs(a - b); - с проверкой валидности можно и так записать
    let angle = Math.abs(a - b) % 360;

    if ( angle > 180 ) {
        angle = 360 - angle;
    }

    return angle;

}

console.log(diff(0, 45));       // 45
console.log(diff(0, 180));      // 180
console.log(diff(0, 190));      // 170
console.log(diff(120, 280));    // 160

console.log(' ');

// оператор % (остаток от целого деления) работает очень интересно, если делимое меньше делителя:
// в таком случае на вывод будет дываться просто делитель (наименьшее значение):
console.log('здесь из 45 и 360 выдастся 45 (45 < 360) \t-', 45 % 360);
console.log('здесь из 12 и 5 выдастся 2 (остаток) \t\t-', 12 % 5);
console.log('здесь из 10 и 5 выдастся 0 (без остатка) \t-', 10 % 5);