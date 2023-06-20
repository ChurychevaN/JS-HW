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

const durationBetweenDates = (
  startDate,
  endDate,
  dimensionality = "minutes"
) => {
  const ms = Math.abs(new Date(endDate) - new Date(startDate));

  switch (dimensionality) {
    case DIMENSIONALITY.DAYS:
      return `${ms / (1000 * 3600 * 24)} ${DIMENSIONALITY.DAYS}`;
    case DIMENSIONALITY.HOURS:
      return `${ms / 3600000} ${DIMENSIONALITY.HOURS}`;
    case DIMENSIONALITY.MINUTES:
      return `${ms / 60000} ${DIMENSIONALITY.MINUTES}`;
    case DIMENSIONALITY.SECONDS:
      return `${ms / 1000} ${DIMENSIONALITY.SECONDS}`;
  }
};

console.log(durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds"));
console.log(durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days"));
console.log(durationBetweenDates("Hello:)"));

// 2
// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

// Приклад:
// // приклад об'єкту
const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

function optimizedObj(data) {
  // тут ваш код
  let optimizer = {};

  for (let key in data) {
    optimizer[key.toLowerCase()] = parseFloat(data[key]).toFixed(2);
  }
  return optimizer;
}

let updatedPriceData = optimizedObj(priceData);
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
  return recursiveOddSumTo(number - 1);
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// — функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатних чисел до якогось числа.

// Приклад:
function iterativeOddSumTo(number) {
  let sum = 0;
  // тут ваш код
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
}
console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
