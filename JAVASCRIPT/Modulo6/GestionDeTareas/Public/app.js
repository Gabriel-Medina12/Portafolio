document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const editFormContainer = document.getElementById('editFormContainer');
    const editForm = document.getElementById('editForm');
    let currentTaskId = null;

    loadTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const status = document.getElementById('status').value;

        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, due_date: dueDate, status })
        })
        .then(response => response.json())
        .then(() => {
            loadTasks();
            taskForm.reset();
        });
    });

    function loadTasks() {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(tasks => {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <strong>${task.title}</strong>
                        <p>${task.description}</p>
                        <p>Fecha: ${task.due_date}</p>
                        <p>Estado: ${task.status}</p>
                        <button onclick="editTask(${task.id})">Editar</button>
                        <button onclick="deleteTask(${task.id})">Eliminar</button>
                    `;
                    taskList.appendChild(li);
                });
            });
    }

    window.editTask = function(id) {
        fetch(`/api/tasks/${id}`)
            .then(response => response.json())
            .then(task => {
                editFormContainer.style.display = 'block';

                document.getElementById('editTitle').value = task.title;
                document.getElementById('editDescription').value = task.description;
                document.getElementById('editDueDate').value = task.due_date;
                document.getElementById('editStatus').value = task.status;

                currentTaskId = task.id;
            });
    };

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('editTitle').value;
        const description = document.getElementById('editDescription').value;
        const dueDate = document.getElementById('editDueDate').value;
        const status = document.getElementById('editStatus').value;

        fetch(`/api/tasks/${currentTaskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, due_date: dueDate, status })
        })
        .then(response => response.json())
        .then(() => {
            loadTasks();
            cancelEdit();
        });
    });

    window.cancelEdit = function() {
        editFormContainer.style.display = 'none';
        currentTaskId = null;
    };

    window.deleteTask = function(id) {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' })
            .then(() => loadTasks());
    };
});