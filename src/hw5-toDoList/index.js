"use strict";
// 1. Виправити помилку з видаленням завдання
// Наразі у програми є проблема з видаленням окремих елементів, якщо у списку є завдання з однаковими текстами. Наприклад, у вас є наступний список завдань:
//     Поїсти
//     Поспати
//     Сходити в зал
//     Поїсти
//     Поспати
//     Сходити в офіс
//     Поїсти
//     Поспати
//     Піти додому
//     Якщо юзер видалить друге завдання 'Поїсти' (яке йде після 'Сходити в зал'), то на сторінці все видалиться коректно, проте у локалСТораджі видаляться всі завдання 'Поїсти'.
//     Зробіть так, аби функціонал видалення працював коректно - тобто аби при видалені на сторінці з локалСтораджу видалявся саме той елемент який видалив юзер, а не якісь ще крім нього.
//     Для цього можете використати кастомні атрибути (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) і/або індекс елементу і методи масивів та приведення до масивів.
// 2. Додати можливість оновлювати окреме завдання
//     Зробіть так аби юзер крім видалення окремого елементу мав ще й можливість редагувати текст окремого завдання.
//     Для цього можете додати іконку з олівцем поруч з іконкою для видалення.
//     Приклад елементу:
//      <i class="fa fa-edit"></i>
//     Для самого функціоналу можете використати вбудоване діалогове вікно (https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) а також індекс елементу і методи масивів та приведення до масивів
// 3. Додати всій сторінці стилів
//     Додайте сторінці візуальної унікальності через css класи
// 4. Розмістити на гітхаб-сторінці
// Зробіть так аби був доступ до сторінки через інтернет для всіх охочих
/**
 * Оголошуємо змінні з HTML елементами
 */
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector(".filter-input");
const form = document.querySelector(".create-task-form");
/**
 * Створюємо слухачі на необхідні нам події
 */
document.addEventListener("DOMContentLoaded", renderTasks);
clearBtn.addEventListener("click", clearAllTasks);
taskList.addEventListener("click", handleTaskAction);
form.addEventListener("submit", createTask);
/**
 * Отримуємо дані з localStorage
 * @return {[String]} - масив з задачами, або пустий масив, якщо localStorage пустий
 */
function getTasksFromLocalStorage() {
  return localStorage.getItem("tasks") !== null
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

/**
 * Записуємо дані в localStorage
 * @param {Array} tasks - масив з задачами
 */
function setTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Створюємо окрему задачу
 * @param {String} task - окрема задача
 */
function createSingleTaskElement(task, index) {
  // Створюємо HTML елемент li
  const li = document.createElement("li");
  // Додаємо елементу клас
  li.className = "collection-item";
  // Кладемо в нього текстову ноду з задачею
  li.appendChild(document.createTextNode(task));

  // Створюємо обгортку для іконки по кліку на яку буде видалена окрема задача
  const deleteElement = document.createElement("span");
  // Додаємо елементу клас
  deleteElement.className = "delete-item";
  // Кладемо в нього іконку
  deleteElement.innerHTML = '<i class="fa fa-remove"></i>';

  // Створюємо обгортку для іконки по кліку на яку буде редагована окрема задача
  const editElement = document.createElement("span");
  editElement.className = "edit-item";
  editElement.innerHTML = '<i class="fa fa-edit"></i>';

  // Додаємо елемент в елемент списку
  li.appendChild(deleteElement);
  li.appendChild(editElement);
  li.dataset.taskIndex = index;
  // Додаємо елемент списку в список задач
  taskList.appendChild(li);
}

/**
 * Додаємо в DOM існуючі задачі
 */
function renderTasks() {
  // Отримуємо задачі з localStorage або пустий масив
  const tasks = getTasksFromLocalStorage();

  // Проходимо по масиву задач і додаємо кожну задачу в список, в DOM
  tasks.forEach((task, index) => {
    createSingleTaskElement(task, index);
  });
}

// Обробляє події взаємодії з окремою задачею (видалення або редагування)
function handleTaskAction(event) {
  const deleteItem = event.target.closest(".delete-item");
  const editItem = event.target.closest(".edit-item");

  if (deleteItem) {
    // Видалення задачі
    const taskItem = deleteItem.parentNode;
    const taskIndex = parseInt(taskItem.dataset.taskIndex);
    if (confirm("Ви впевнені, що хочете видалити цю задачу?")) {
      removeTaskFromLocalStorage(taskIndex);
      taskItem.remove();
    }
  } else if (editItem) {
    // Редагування задачі
    const taskItem = editItem.parentNode;
    const taskIndex = parseInt(taskItem.dataset.taskIndex);
    editTask(taskItem, taskIndex);
  }
}

//edit текст окремої задачі
function editTask(taskItem, taskIndex) {
  // Створюємо новий елемент для оновленого тексту задачі
  const newTaskText = prompt(
    "Введіть новий текст задачі",
    taskItem.textContent.trim()
  );

  if (newTaskText !== null && newTaskText.trim() !== "") {
    // Отримуємо посилання на іконку видалення
    const deleteItem = taskItem.querySelector(".delete-item");
    // Отримуємо посилання на іконку редагування
    const editItem = taskItem.querySelector(".edit-item");

    taskItem.textContent = newTaskText.trim();

    taskItem.appendChild(deleteItem);
    taskItem.appendChild(editItem);

    updateTaskInLocalStorage(taskIndex, newTaskText.trim());
  }
}

// update задачу в localStorage
function updateTaskInLocalStorage(taskIndex, newTaskText) {
  const tasks = getTasksFromLocalStorage();
  tasks[taskIndex] = newTaskText;
  setTasksToLocalStorage(tasks);
}

/**
 * Створюємо окрему задачу
 * @param {Event} event - The triggering event
 */
function createTask(event) {
  // Блокуємо дефолтний сабміт форми
  event.preventDefault();
  // Виходимо з функції якщо в полі немає тексту і видаляймо непотрібні пробіли до і після тексту
  if (taskInput.value.trim() === "") {
    return;
  }

  // Створюємо нову задачу і додаємо в DOM
  createSingleTaskElement(taskInput.value);
  // Додаємо нову задачу в localStorage
  storeTaskInLocalStorage(taskInput.value);

  // Очищуємо поле після додавання нової задачі в список
  taskInput.value = "";
}

/**
 * Додаємо нову створену задачу в localStorage
 * @param {String} task - окрема задача
 */
function storeTaskInLocalStorage(task) {
  // Отримуємо поточні задачі з localStorage
  const tasks = getTasksFromLocalStorage();

  // Додаємо нову задачу в масив
  tasks.push(task);
  // Записуємо оновлений масив в localStorage
  setTasksToLocalStorage(tasks);
}

/**
 * Видаляємо всі задачі з localStorage та з DOM
 */
function clearAllTasks() {
  // Показуємо користувачу модальне вікно для підтвердження видалення всіх задач
  if (confirm("Ви впевнені що хочете видалити всі задачі?")) {
    // Якщо користувач підтверджує, то видаємо всі задачі з localStorage та з DOM
    localStorage.clear();
    taskList.innerHTML = "";
  }
}

/**
 * Видаляємо окрему задачу з localStorage та з DOM
 * @param taskToRemove - DOM елемент
 */
function removeTaskFromLocalStorage(taskIndex) {
  // Отримуємо поточні задачі з localStorage
  const tasks = getTasksFromLocalStorage();

  tasks.splice(taskIndex, 1);
  // Записуємо оновлений масив в localStorage
  setTasksToLocalStorage(tasks);
}
