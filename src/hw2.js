// 1
// Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

// Приклади:
// durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'

const DIMENSIONALITY = {
  DAYS: "days",
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds",
};

const durationBetweenDates = (start, end, dimensionality) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const ms = endDate - startDate;
  const diffDate = startDate - endDate;

  switch (dimensionality) {
    case DIMENSIONALITY.DAYS:
      console.log(
        Math.ceil(diffDate / (1000 * 3600 * 24)),
        DIMENSIONALITY.DAYS
      );
      break;
    case DIMENSIONALITY.HOURS:
      console.log(Math.floor(ms / 3600000), DIMENSIONALITY.HOURS);
      break;
    case DIMENSIONALITY.MINUTES:
      console.log(Math.floor(ms / 60000), DIMENSIONALITY.MINUTES);
      break;
    case DIMENSIONALITY.SECONDS:
      console.log(Math.floor(ms / 1000), DIMENSIONALITY.SECONDS);

      break;
  }
};

durationBetweenDates("02 Aug 1985", "03 Aug 1985", DIMENSIONALITY.SECONDS);
durationBetweenDates("31 Jan 2022", "03 Feb 2021", DIMENSIONALITY.DAYS);

// 2
// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

// Приклад:
// // приклад об'єкту
const priceData = {
Apples: '23.4',
BANANAS: '48',
oRAngGEs: '48.7584', };

function optimizer(data) { 
    // тут ваш код
    let optimizer = {};

    for (let key in data) {
        if(data.hasOwnProperty(key)) {
            let lowerCaseKey = key.toLowerCase();
            let roundedPrice = parseFloat(data[key]).toFixed(2);
            optimizer[lowerCaseKey] = roundedPrice;
        }
    }
    return optimizer;
 
}
    
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


//3
// Задача про рекурсію та ітерацію
// Напишіть:
// — функцію яка рекурсивно буде знаходити суму всіх непарних додатних чисел до якогось числа.

// Приклад:
function recursiveOddSumTo(number) {
  // тут ваш код

  if (number === 1) {
    return number;
  }
  if (number % 2 > 0) {
    return number + recursiveOddSumTo(number - 1);
  }
  if (number % 2 === 0) {
    return 0 + recursiveOddSumTo(number - 1);
  }
};

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// — функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатних чисел до якогось числа.

// Приклад:
function iterativeOddSumTo(number) {
    let sum = 0;
     // тут ваш код
    for(let i = 1; i <= number; i++) {
        if( i % 2 !== 0)
        sum += i;
    }
    return sum;
    };
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
