// Домашнє завдання по темі "Продвинута робота з функціями"
// 1. Напишіть функцію addThemAll яка буде знаходити суму усіх своїх
// аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
//  Використайте оператор розширення:

console.log(addThemAll(2, 4)); // 6*
console.log(addThemAll(1, 2, 3, 4)); // 10*
console.log(addThemAll(5, 5, 10)); // 20*

function addThemAll(...args) {
  return args.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

// 2. Задача на використання замикання.
// Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b

console.log(multiply(5)(5)); // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3)); // 12*

function multiply(a) {
  // тут ваш код
  return function (b) {
    return a * b;
  };
}

// // 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів.
// // Функція буде приймати два аргументи:
// // Властивість за якою треба посортувати
// // Опцію напрямку сортування, зростання чи спадання

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

console.log(movies.sort(byProperty("releaseYear", ">"))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty("runningTimeInMinutes", "<"))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty("movieName", ">"))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

function byProperty(property, direction) {
  // тут ваш код
  return function (a, b) {
    if (direction === ">") {
     return a[property] > b[property] ? 1 : -1;
    } else{
      return a[property] < b[property] ? 1 : -1;
    }
  }
}

// 4. Напишіть функцію detonatorTimer(delay)
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:
// Використовуючи setIntervalВикористовуючи вкладений setTimeout

detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!*

function detonatorTimer(delay) {
  // // тут ваш код

  let timer = setInterval(() => {
    if (delay > 0) {
      console.log(delay);
      delay--;
    } else {
      console.log("BOOM!");
      clearInterval(timer);
    }
  }, 1000);
}


function detonatorTimer(delay) {

  function countdown (time) {
    if(time > 0) {
      console.log(time);
      setTimeout(() =>
        countdown(time -1), 1000
      );
    } else{
      console.log('BOOM!')
    }
  }
  countdown(delay);
}

// 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.
// Можете описати скільки хочете властивостей і не менше 2 методів.
// Не соромтесь)
// Наприклад:

// let me = {
//   name: 'Mykola',
//   residency: 'Lviv',
//   gender: 'male',
//   age: 31,
//   hobby: 'crafting',
//   defaultMood: 'focused',
//   currentMood: 'sleepy',
//   introduce() {
//   console.log(`My name is ${this.name} and I live in ${this.residency}`);
//   },
//   prognose() {
//   console.log(`I hope that next year I'm gonna be ${this.age+1}`);
//   },
//   describeMyMood(){
//   console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
//   }
//   }

//   me.introduce();
//   me.prognose();
//   me.describeMyMood();

let myDog = {
  defaultName: "Gabi",
  currentName: "Luna",
  defaultNationality: "Polish",
  currentNationality: "Ukrainian",
  age: 2,
  defaultHobby: ["walk", "play with toys"],
  currentHobby: ["sleep", "eat"],
  introduse() {
    console.log(
      `My dog has a name on documents ${this.defaultName}, but we named her ${this.currentName}:)`
    );
  },
  prognose() {
    console.log(`She will have in next year ${this.age+1}.`);
  },
  describeDogNationality() {
    console.log(`By nationality, she is ${this.defaultNationality}, but living in our family, it is clear that she will be ${this.currentNationality}:)`)
  },
  describeDogHobby() {
    console.log(`She really likes to ${this.defaultHobby[1]} but now she is ${this.currentHobby[0]}.`);
  }
};

myDog.introduse();
myDog.prognose();
myDog.describeDogNationality();
myDog.describeDogHobby();

// 6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = myDog.introduse.bind(myDog);      // якийсь код*
let securedSelfPrognose = myDog.prognose.bind(myDog);      // якийсь код*
let securedSelfDescribeDogNationality = myDog.describeDogNationality.bind(myDog);   // якийсь код*
let securedSelfDescribeDogHobby = myDog.describeDogHobby.bind(myDog);

setTimeout(securedSelfIntroduce, 1000);           // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000);           // виведе коректний результат*
setTimeout(securedSelfDescribeDogNationality, 3000);           // виведе коректний результат*
setTimeout(securedSelfDescribeDogHobby, 4000);

// 7. Напишіть функцію-декоратор яка вповільнює 
// виконання довільної функції на вказану кількість секунд.

function someFunction (a, b){
  console.log(a + b);
} // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
// тут ваш код для декоратора
return function(...args) {
  console.log(`Chill out, you will get you result in ${seconds} seconds`);
  setTimeout(() => {
    func.apply(this, args);
  }, seconds * 1000);
};
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(5, 3) // викликаєте декоратор*

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'
