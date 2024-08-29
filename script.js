// 
// Seleccionamos el formulario y la lista de notas
const noteForm = document.getElementById('note-form');
const noteList = document.getElementById('note-list');

// 
// Creamos un array para almacenar las notas
let notes = [];

// 
// Agregamos un evento de submit al formulario
noteForm.addEventListener('submit', (e) => {
  // 
  // Evitamos que el formulario se envíe
  e.preventDefault();

  // 
  // Obtenemos el valor del campo de texto
  const noteText = document.getElementById('note-text').value;

  // 
  // Creamos un objeto nota con el texto y la fecha de creación
  const note = {
    text: noteText,
    createdAt: new Date()
  };

  // 
  // Agregamos la nota al array de notas
  notes.push(note);

  // 
  // Limpiamos el campo de texto
  document.getElementById('note-text').value = '';

  // 
  // Mostramos la nota en la lista
  displayNotes();
});

// 
// Función para mostrar las notas en la lista
function displayNotes() {
  // 
  // Limpiamos la lista de notas
  noteList.innerHTML = '';

  // 
  // Iteramos sobre el array de notas
  notes.forEach((note) => {
    // 
    // Creamos un elemento de lista para cada nota
    const noteElement = document.createElement('li');

    // 
    // Agregamos el texto de la nota al elemento de lista
    noteElement.textContent = note.text;

    // 
    // Agregamos el elemento de lista a la lista de notas
    noteList.appendChild(noteElement);
  });
}

// 
// Mostramos las notas en la lista cuando se carga la página
displayNotes();