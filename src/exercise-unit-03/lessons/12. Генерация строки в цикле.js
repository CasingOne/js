/*
// выполненное задание к [Хекслет] Фронтенд JavaScript (2021)
// 03_JS_Массивы
// 12. Генерация строки в цикле

strings.js
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и
возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку.
Экспортируйте функцию по умолчанию.

Параметры функции
Список определений следующего формата:

 const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];

То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

Пример использования
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions); // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

*/

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
    ['Хуйлыга', 'То же самое, что и нехроший человек'],
];

const buildDefinitionList = (definitions) => {

    if (definitions.length === 0) {
        return console.log('');
    }

    const html = [];

    for (const element of definitions) {
        html.push(`<dt>${element[0]}</dt><dd>${element[1]}</dd>`);
    }

    const innerHtml = html.join('');
    return console.log(`<dl>${innerHtml}</dl>`);
}

buildDefinitionList(definitions);

