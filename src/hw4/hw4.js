'use strict';
// 1. Задача на селектори:
// Для сторінки з вебінару (лінк на гіт) напишіть селектори для наступних елементів:
// - для елементу з текстом 'Навігація по DOM дереву'
// - для першого елементу <section>
// - для елементу списку з текстом 'Пункт 5'
// - для елементу з класом 'hatredLevelBlock'
// Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
// Приклад:
//  let spanWithClass = document.querySelector('.hatredLevelCounter');

const h2Class = document.getElementById('headerTwo');
const firstSection = document.getElementsByClassName('firstSection');
const text5 = document.body.lastElementChild.lastElementChild.previousSibling;
const divBlock = document.querySelector('.hatredLevelBlock');
