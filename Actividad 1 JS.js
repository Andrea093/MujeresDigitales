// Definir variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    {
        nombre: "La propuesta",
        año: 2009,
        protagonistas: ["Sandra Bullock", "Ryan Reynolds"]
    },
    {
        nombre: "Oppenheimer",
        año: 2023,
        protagonistas: ["Cilian Murphy", "Florence Pugh"]
    }
];

// Mostrar valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculasFavoritas);

// Incrementar la edad en 1
edad += 1;
console.log("Nueva Edad:", edad);

// Agregar una serie a la lista de series favoritas
seriesFavoritas.push("3 Body problem");
console.log("Series Favoritas Actualizadas:", seriesFavoritas);