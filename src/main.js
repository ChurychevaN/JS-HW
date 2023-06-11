"use strict";

// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

// тут ваш код ...

let initials = userNames
  .map((userName) =>
    userName
      .split(" ")
      .map((arr) => arr[0])
      .join(".")
  )
  .sort()
  .map((initial) => `${initial}.`);

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// Задача на розворот числа:

const currentMaxValue = 4589;

// // тут ваш код...
const reverseMaxValue = +("" + currentMaxValue).split("").reverse().join("");

console.log(typeof reverseMaxValue, reverseMaxValue); // 9854

// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];

// тут ваш код...

const flatMatrix = resultsArray.flat(Infinity);
console.log(flatMatrix);

const productOfArray = flatMatrix.reduce((prev, current) => {
  return prev * current;
});

console.log(productOfArray); // 24
