/*
challenges - programming_basics_time

formattedTime.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и
возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), то
функция возвращает время, прошедшее с полуночи последних суток.

Примеры:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
formattedTime(1504); // 01:04

Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы.

*/

/*
const formattedTimeD = (minutes) => {

    let DY = Math.floor((minutes / 60) / 24);
    let HH = Math.floor(minutes / 60);
    let MM = minutes - HH * 60;

    if (HH >= 24) {
        HH = Math.abs(HH - 24) % 24;
    }

    if (String(HH).length < 2) {
        HH = '0' + HH;
    }
    if (String(MM).length < 2) {
        MM = '0' + MM;
    }

    return `${minutes} \t minute${minutes>1&&!0?'s':''} \t = ${DY} day${Number(DY)>1&&!0?'s':''} ${HH} hour${Number(HH)>1||0?'s':''} ${MM} minute${Number(MM)>1&&!0?'s':''}`;
}
*/



const formattedTime = (minutes) => {

    let HH = Math.floor(minutes / 60);
    let MM = minutes - HH * 60;

    if (HH >= 24) {
        HH = Math.abs(HH - 24) % 24;
    }

    // let lenghtHH = String(HH).length;
    // let lenghtMM = String(MM).length;

    if (String(HH).length < 2) {
        HH = '0' + HH;
    }
    if (String(MM).length < 2) {
        MM = '0' + MM;
    }

    return `${HH}:${MM}`;
}

console.log(formattedTime(5));      // 00:05
console.log(formattedTime(15));     // 00:15
console.log(formattedTime(60));     // 01:00
console.log(formattedTime(67));     // 01:07
console.log(formattedTime(175));    // 02:55
console.log(formattedTime(600));    // 10:00
console.log(formattedTime(754));    // 12:34
console.log(formattedTime(1440));   // 00:00
console.log(formattedTime(1504));   // 01:04

