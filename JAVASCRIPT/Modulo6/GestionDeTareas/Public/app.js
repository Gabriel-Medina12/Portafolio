document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    loadTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const status = document.getElementById('status').value;

        if (!title) {
            alert('El título es obligatorio');
            return;
        }

        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, due_date: dueDate, status })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error); // Muestra el error si lo hay
            } else {
                loadTasks(); // Recarga la lista de tareas
                document.getElementById('taskForm').reset(); // Limpia el formulario
            }
        })
        .catch(error => console.error('Error:', error));
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
                        <button onclick="deleteTask(${task.id})">Eliminar</button>
                    `;
                    taskList.appendChild(li);
                });
            });
    }

    window.deleteTask = function(id) {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' })
            .then(() => loadTasks());
    };
});