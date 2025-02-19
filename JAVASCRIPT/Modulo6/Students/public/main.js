document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');
    const submitButton = studentForm.querySelector('button[type="submit"]');


    function loadStudents() {
        fetch('/api/students')
            .then(response => response.json())
            .then(data => {
                studentList.innerHTML = '';
                data.forEach(student => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        ${student.nombre} ${student.apellido} - ${student.grado}
                        <button onclick="editStudent(${student.id})">Editar</button>
                        <button onclick="deleteStudent(${student.id})">Eliminar</button>
                    `;
                    studentList.appendChild(li);
                });
            });
    }


    function addStudent(e) {
        e.preventDefault();
        const student = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
            grado: document.getElementById('grado').value
        };
        fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(() => {
            loadStudents(); 
            studentForm.reset(); 
        });
    }


    window.deleteStudent = (id) => {
        if (confirm('¿Estás seguro de que quieres eliminar este estudiante?')) {
            fetch(`/api/students/${id}`, {
                method: 'DELETE'
            }).then(() => {
                loadStudents();
            });
        }
    };


    window.editStudent = (id) => {

        fetch(`/api/students/${id}`)
            .then(response => response.json())
            .then(student => {

                document.getElementById('nombre').value = student.nombre;
                document.getElementById('apellido').value = student.apellido;
                document.getElementById('fecha_nacimiento').value = student.fecha_nacimiento;
                document.getElementById('grado').value = student.grado;


                submitButton.textContent = 'Actualizar Estudiante';


                studentForm.onsubmit = (e) => {
                    e.preventDefault();
                    const updatedStudent = {
                        nombre: document.getElementById('nombre').value,
                        apellido: document.getElementById('apellido').value,
                        fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
                        grado: document.getElementById('grado').value
                    };
                    fetch(`/api/students/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedStudent)
                    }).then(() => {
                        loadStudents(); 
                        studentForm.reset(); 
                        submitButton.textContent = 'Agregar Estudiante'; 
                        studentForm.onsubmit = addStudent; 
                    });
                };
            });
    };


    studentForm.onsubmit = addStudent;


    loadStudents();
});