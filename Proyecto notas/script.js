// script.js
const noteForm = document.getElementById('note-form'); // Selecciona el formulario con id "note-form"
const noteList = document.getElementById('note-list'); // Selecciona la lista con id "note-list"

noteForm.addEventListener('submit', (e) => { // Agrega un evento de submit al formulario
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const noteText = document.getElementById('note-text').value; // Obtiene el valor del campo de texto de la nota
    const noteListItem = document.createElement('li'); // Crea un nuevo elemento li
    noteListItem.textContent = noteText; // Establece el texto del elemento li
    noteList.appendChild(noteListItem); // Agrega el elemento li a la lista
    document.getElementById('note-text').value = ''; // Limpia el campo de texto de la nota
});

// Almacenamiento local
const notes = []; // Crea un arreglo vacío para almacenar las notas

noteList.addEventListener('DOMContentLoaded', () => { // Agrega un evento de carga al DOM
    notes.forEach((note) => { // Recorre el arreglo de notas
        const noteListItem = document.createElement('li'); // Crea un nuevo elemento li
        noteListItem.textContent = note; // Establece el texto del elemento li
        noteList.appendChild(noteListItem); // Agrega el elemento li a la lista
    });
});

// Guardar nota en almacenamiento local
noteForm.addEventListener('submit', (e) => { // Agrega un evento de submit al formulario
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const noteText = document.getElementById('note-text').value; // Obtiene el valor del campo de texto de la nota
    notes.push(noteText); // Agrega la nota al arreglo de notas
    localStorage.setItem('notes', JSON.stringify(notes)); // Almacena el arreglo de notas en almacenamiento local
});

// Cargar notas desde almacenamiento local
window.addEventListener('load', () => { // Agrega un evento de carga al documento
    const storedNotes = localStorage.getItem('notes'); // Obtiene el arreglo de notas almacenadas
    if (storedNotes) { // Verifica si hay notas almacenadas
        notes = JSON.parse(storedNotes); // Convierte el arreglo de notas almacenadas en un arreglo JavaScript
        notes.forEach((note) => { // Recorre el arreglo de notas
            const noteListItem = document.createElement('li'); // Crea un nuevo elemento li
            noteListItem.textContent = note; // Establece el texto del elemento li
            noteList.appendChild(noteListItem); // Agrega el elemento li a la lista
        });
    }
});

// Autenticación de usuarios (opcional)
const loginForm = document.getElementById('login-form'); // Selecciona el formulario de login
const usernameInput = document.getElementById('username'); // Selecciona el campo de texto de usuario
const passwordInput = document.getElementById('password'); // Selecciona el campo de texto de contraseña

loginForm.addEventListener('submit', (e) => { // Agrega un evento de submit al formulario de login
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const username = usernameInput.value; // Obtiene el valor del campo de texto de usuario
    const password = passwordInput.value; // Obtiene el valor del campo de texto de contraseña
    if (username === 'admin' && password === 'password') { // Verifica las credenciales de usuario
        // Autenticación exitosa, permite acceder a la aplicación
    } else {
        // Autenticación fallida, muestra un mensaje de error
    }
});