const body = document.body;
const cards1 = document.getElementsByClassName('card'); // живая коллекция
const cards2 = document.querySelectorAll('.card'); // снимок
const card = document.querySelector('.card');
let element;

element = body.previousElementSibling;
element = body.nextElementSibling;
element = body.firstElementChild;
element = body.lastElementChild;
element = body.children;

// как привести псевдомассив в обысный массив
element = Array.prototype.slice.call(body.children);

element = cards1;
element = document.links;
element = document.forms;

// console.dir(cards1);
// console.dir(cards2);
// console.dir(element);

const cards = Array.prototype.slice.call(cards1);
// const listCards = [];

// for (let i = 0; i < cards1.length; i++) {
//     if (cards1[i].matches('.list-card')) {
//         listCards.push(cards1[i]);
//     };
// }

// const listCards = cards.filter(card => card.matches('.list-card'));
//
// console.log(listCards);



//const parent = card.closest('.container'); // вернет ближайшего вышестоящего родителя с классом container
const parent = card.parentElement; // вернет прямого родителя

// console.log(parent);

const li = document.querySelector('.list-group-item');
// получение содержимого
// li.innerHTML // получаем строку всего что в li
// li.textContent  // получаем только текстовое содержимое без разметки
// li.textContent = 'asdasdasdad'   // можно записать туда новые данные


// РАБОТА С АТРИБУТАМИ
// li.id  // запрашиваем id
// li.className  // все классы в виде строки
// li.classList.contains('new');  // проверяем на наличие класса
// li.classList.add('new')  // добавить класс
// li.classList.remove('new')  // удалить класс
// // li.classList.toggle('new')  // переключатель класса (вкл/выкл)
// li.attributes // вернет объект из всех атрибутов объекта
// li.getAttribute('id'); // получить значение атрибута
// li.setAttribute('id', 'new Value');  // Записать новое значение атрибута  (атрибут, новое значение)
// li.hasAttribute('id');   // Проверяет на наличие атрибута
// li.removeAttribute('id');  // удалить атрибут

// СВОИ АТРИБУТЫ
// data-contacts  // добавить свой атрибут data-'название'
// li.dataset;    // получим значение атрибута data-название в виде: {название: "значение"}
// li.dataset.contacts  // Получим значение data-contacts



////////////////////////////////////          События               ////////////////////////////////////////




