/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 2. Синтаксис

dates.js
Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней
на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – массив содержит значения saturday и sunday
'short' – массив содержит значения sat и sun

Примеры
import { getWeekends } from '../dates.js';

// Вывод не показан, так как это равносильно ответу
getWeekends();
// То же самое что и вызов выше
getWeekends('long');
getWeekends('short');

*/

export const getWeekends = (format) => {

  let array = [];

  if (format === 'short') {
    return array = ['sat','sun'];
  }
  else {
    return array = ['saturday','sunday'];
  }

}