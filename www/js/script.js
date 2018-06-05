// Task model
let tasks = [
    {
        text: 'Learn js1',
        id: '1'
    },
    {
        text: 'Learn angular2',
        id: '2'
    }
];

// Get element list-group
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');
const listContainer = document.querySelector('.list-card .card-body');
const form = document.forms['addTodoItem']; // получили форму
const input = form['todoText']; // получили инпут из коллекции элементов формы
const addBtn = document.querySelector('.add-task-btn');

// Events
clearBtn.addEventListener('click', clearList);
// clearBtn.removeEventListener('click', clearList);
form.addEventListener('submit', onSubmit);

input.addEventListener('keyup', function (evn) {
    addBtn.disabled = !(input.value.length > 2); // если знач в инпуте то снимает дисабл
});

// вешаем на список ul слушатель с функцией показывать по клику куда кликнули в пределах списка
ul.addEventListener('click', function (evn) {
   // console.log(evn.target.classList.contains('delete-task'));
   if (evn.target.classList.contains('delete-task')) {
       // console.log('delete'); // если кликнули на корзину, то true
       const parent = evn.target.closest('li'); // нашли родителя
       const id = parent.dataset.id; // получаем значение id из нашего атрибута data-id
       parent.remove(); // удаляем li из разметки
       // ul.removeChild(li); // 2 вариант удаления через child.
       deleteTask(id);
       console.log(tasks);

       if (!tasks.length) showAlertEmpty('Clear list');
   }
});

// Generate tasks
tasks.forEach(task => {
    let li = listTemplate(task);
//     // Добавление созданных элементов в список ul
//     // AppendChild
//     //ul.appendChild(li); // родительский элемент куда добавляем.appendChild(созданный в create элемент)
//     // InsertAdjustcentElement
    ul.insertAdjacentElement("afterbegin", li);
});

// короткая запись
// tasks.forEach(task => ul.insertAdjacentElement('afterBegin', listTemplate(task));

// On submit
function onSubmit(evn) {
    evn.preventDefault();
    const value = input.value; // забираем значение из инпута
    addTask(value); // добавляем новую задачу
}


function clearList(evn) {
    evn.preventDefault();
    // const currentAlert = listContainer.querySelector('.alert'); // получаем текущий алерт
    // const alert = alertTemplate('Clear List'); // Получили разметку алерта
    //
    // if (currentAlert) currentAlert.remove(); // удаляем задвоенное сообщение clear list если есть уже одно

    tasks = []; // очистили массив
    ul.innerHTML = ''; // Удалили разметку
    showAlertEmpty('Clear list'); // сообщение о пустом списке

    // listContainer.insertAdjacentHTML('afterBegin', alert); // Добавили алерт в контейнер
}
// Show alert empty
function showAlertEmpty(text) {
    const alert = alertTemplate(text);
    const currentAlert = listContainer.querySelector('.alert');

    if (currentAlert) currentAlert.remove();
    listContainer.insertAdjacentHTML('afterBegin', alert);
    return 'success';
}
// Alert Template
function alertTemplate(text) {
    const template = `  
        <div class="alert alert-info">${text}</div>
    `; // создаем шаблонную строку
    return template;
}


// Task List Template
function listTemplate(task) {
    // Create element
    const li = document.createElement('li');
    const deleteIcon = `<i class="fas fa-trash delete-task"></i>`; // создали разметку для иконки удаления

    // Add text of task into li
    li.textContent = task.text;
    li.insertAdjacentHTML('beforeend', deleteIcon); // добавили иконку в ли
    // Set id of task into li
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created element
    return li;
}

// Add task
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length + 1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li on ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask));
}
// Delete task
function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (id == tasks[i].id) {
            tasks.splice(tasks[i], 1); // удаление по id из массива
        }
    }
    // ul.innerHTML = ''; // очистили html
    // tasks.sort((prev, next) => prev.id - next.id); // упорядочили элементы массива по id
    // tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task))); // создали новую разметку
}

