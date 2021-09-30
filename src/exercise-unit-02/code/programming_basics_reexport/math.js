/*
challenges - programming_basics_reexport

[ math.js ]

Программист, который работал на проекте до вас, разбросал все функции, связанные с математическими вычислениями по
разным файлам с именами numbers1.js, numbers2.js и numbers3.js. Причем имена функций тоже сделал странными: все функции
в файле numbers2.js заканчиваются на двойку, например, sum2().

Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним (говорят "фасад"). Для этого
необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.


Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и выставил их
наружу (то есть сделал их реэкспорт) под следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал
функцию cube() по умолчанию.

В этом задании специально не сказано, где какая функция и под каким именем лежит. А так же не сказано, как они все
экспортируются. Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей, что очень упростит вашу жизнь
в дальнейшем. Огромная просьба не подсматривать решение и подумать самостоятельно, а в случае чего задать вопрос
в комьюнити.

Не забудьте проанализировать файл с тестами, чтобы понять, как используется модуль math.js.

import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");

*/

/*
import { pow1 as pow, sum1 as sum, sub1 as sub, sqrt1 as sqrt } from "./numbers1.js";
import { pow2 as pow, sum2 as sum, sub2 as sub, sqrt2 as sqrt } from "./numbers2.js";
import { pow3 as pow, sum3 as sum, sub3 as sub, sqrt3 as sqrt } from "./numbers3.js";
*/

import { pow1, sum1, sub1, sqrt1 } from "./numbers1.js";
import { pow2, sum2, sub2, sqrt2 } from "./numbers2.js";
import { pow3, sum3, sub3, sqrt3 } from "./numbers3.js";

/*
pow();
sum();
sub();
sqrt();*/


const isEven = num => num % 2 === 0;

// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

console.log(increaseNum(num));

console.log(result);