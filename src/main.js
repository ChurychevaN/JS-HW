"use strict";

// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

// тут ваш код ...

/////////////////////////////////
const newArr = [];

userNames.forEach((str) => {
  const res = str.split(" ");
  const resArr = [];

  res.forEach((str) => {
    const index = str[0];
    resArr.push(index);
  });
  const initial = resArr.join(".");
  newArr.push(initial + ".");
});
const initials = newArr.sort();
console.log(initials);

// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/////////////////////////////////////////////////////////////////////
// Задача на розворот числа:

const currentMaxValue = 4589;

// // тут ваш код...
let reverseMaxValue = ("" + currentMaxValue).split("").reverse().join("");

console.log(reverseMaxValue);

// console.log(reverseMaxValue); // 9854
// console.log(reverseMaxValue); // 'number'

/////////////////////////////////////////////////////////
// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];

// тут ваш код...

const flatMatrix = resultsArray.flat(Infinity);
console.log(flatMatrix);

const productOfArray = flatMatrix.reduce((prev, current) => {
  return prev * current;
}, resultsArray[0]);

console.log(productOfArray);

// console.log(productOfArray); // 24
