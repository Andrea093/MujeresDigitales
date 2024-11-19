import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #fff;
    overflow-x: hidden; /* Evitar el desbordamiento horizontal */
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Asegurado para evitar barras laterales */
  }

  /* Estilos para la sección de Home */
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #e6e6fa;
    text-align: center;
    padding: 20px;
    box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
    color: #fff;
  }

  /* Caja para las imágenes del home */
  .image-container {
    width: 100%;
    max-width: 800px; /* Controla el ancho máximo del contenedor */
    overflow: hidden; /* Oculta el desbordamiento */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para el efecto de profundidad */
    margin: 20px 0; /* Margen para separar las imágenes */
    color: #fff;
  }

  .image-container img {
    width: 100%;
    height: auto; /* Mantiene la proporción de la imagen */
    object-fit: cover; /* Mantiene la proporción y evita cortes */
  }

  /* Estilos de productos */
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    background-color: #e6e6fa;
    padding: 20px;
    box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
  }

  /* Resto de estilos ya existentes */
  // ...
  
`;

export default GlobalStyles;
