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

function toggleButton() {
  const isTurnedOn = button.getAttribute("data-isTurnedOn") === "true";

  button.setAttribute("data-isTurnedOn", isTurnedOn ? "false" : "true");
  button.textContent = isTurnedOn ? "Turn off" : "Turn on";
  document.body.classList.toggle("dark-background", !isTurnedOn);
  statusMessage.textContent = isTurnedOn
    ? `Last turn off: ${getCurrentDateTime()}`
    : `Last turn on: ${getCurrentDateTime()}`;

  localStorage.setItem("isTurnedOn", button.getAttribute("data-isTurnedOn"));
  localStorage.setItem("lastChange", getCurrentDateTime());
}

function getCurrentDateTime() {
  return new Date().toLocaleString();
}

button.addEventListener("click", toggleButton);
