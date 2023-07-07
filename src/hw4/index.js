"use strict";
// 2. Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом
// Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
// В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
// Логіку роботи реалізуйте в окремому js-файлі.

const button = document.querySelector(".button");
const statusMessage = document.querySelector(".statusMessage");

function getItemFromLocalStorage() {
  const isTurnedOn = localStorage.getItem("isTurnedOn");
  const lastChange = localStorage.getItem("lastChange");

  if (isTurnedOn === "true") {
    turnOn();
  } else {
    turnOff();
  }

  if (lastChange) {
    statusMessage.textContent = isTurnedOn === "true"
      ? `Last turn off: ${lastChange}`
      : `Last turn on: ${lastChange}`;
  }

}

function turnOn() {
  button.textContent = "Turn off";
  document.body.classList.remove("dark-background");
}

function turnOff() {
  button.textContent = "Turn on";
  document.body.classList.add("dark-background");
}

function toggleButton() {
  const isTurnedOn = button.getAttribute("data-isTurnedOn") === "true";

  button.setAttribute("data-isTurnedOn", isTurnedOn ? "false" : "true");
  localStorage.setItem("isTurnedOn", button.getAttribute("data-isTurnedOn"));

  if (isTurnedOn) {
    turnOff();
    statusMessage.textContent = `Last turn off: ${getCurrentDateTime()}`;
    localStorage.setItem("lastChange", getCurrentDateTime());
  } else {
    turnOn();
    statusMessage.textContent = `Last turn on: ${getCurrentDateTime()}`;
    localStorage.setItem("lastChange", getCurrentDateTime());
  }
}

function getCurrentDateTime() {
  const currentDate = new Date(); 
  
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth()).padStart(2, '0');
  const year = String(currentDate.getFullYear());
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year}  ${hours}:${minutes}:${seconds}`
}

button.addEventListener("click", toggleButton);
getItemFromLocalStorage();
