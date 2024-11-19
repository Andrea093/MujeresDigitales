import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const products = [
   //Earcuff
   { id: 1, name: 'Earcuff Mostacilla', price: 16000, img: '/assets/img1.jpg', description: 'Descubre la belleza y el estilo en cada detalle de nuestro Earcuff de mostacillas. Este accesorio, de diseño corto pero delicado, aporta un toque de elegancia sin necesidad de perforación. Hecho a mano con mostacillas de alta calidad, cada pieza es cuidadosamente ensamblada para garantizar durabilidad y comodidad en su uso. Su diseño minimalista permite combinarlo fácilmente con otros accesorios, mientras que su vibrante colorido añade una nota de sofisticación a cualquier look. Ideal para quienes buscan un toque de originalidad y estilo en su día a día.', descriptionItems: [ 'Material: Mostacillas de alta calidad', 'Longitud: Diseño corto, perfecto para el lóbulo de la oreja', 'Sin perforación, fácil de colocar', 'Versátil y combinable con otros accesorios', 'Hecho a mano para un toque único' ] },
   { id: 2, name: 'Earcuff Colores Lis', price: 15000, img: '/assets/img3.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
   { id: 3, name: 'Earcuff Colores Tex', price: 8000, img: '/assets/img4.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
   { id: 4, name: 'Earcuff Seed', price: 16000, img: '/assets/img5.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
   { id: 5, name: 'Earcuff Chunky', price: 15000, img: '/assets/img6.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      
  //Aretes
    
      { id: 6, name: 'Aretes Media Luna', price: 18000, img: '/assets/img2.jpg', description: 'Eleva tu estilo con nuestros aretes de media luna en acabado dorado, diseñados para quienes buscan un toque de elegancia moderna y sofisticada. Con un tamaño mediano ideal, estos aretes capturan la luz y realzan cualquier atuendo, desde looks casuales hasta conjuntos más formales. Su forma de media luna simboliza misterio y feminidad, haciéndolos una elección perfecta para quienes desean un accesorio versátil y con carácter. Fabricados con materiales de alta calidad, su brillo y durabilidad aseguran que siempre se verán impecables. Características: •	Diseño: Media luna, símbolo de feminidad y encanto •	Tamaño: Mediano, ideal para un look sutil pero llamativo •	Acabado: Dorado de alta calidad, resistente y brillante •	Livianos y cómodos para uso diario  •	Cierre seguro para un ajuste perfecto' },
      { id: 7, name: 'Arete Tex', price: 16000, img: '/assets/img7.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 8, name: 'Gota Color', price: 15000, img: '/assets/img8.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 9, name: 'Chunky', price: 18000, img: '/assets/img9.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 10, name: 'Candonga Diseño', price: 16000, img: '/assets/img11.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 11, name: 'Candonga Silver', price: 16000, img: '/assets/img12.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 12, name: 'Square', price: 16000, img: '/assets/img13.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 13, name: 'Rhombus', price: 16000, img: '/assets/img14.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 14, name: 'CandoTex', price: 17000, img: '/assets/img15.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 15, name: 'ColorsHoop', price: 15000, img: '/assets/img16.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 16, name: 'AreGold', price: 16000, img: '/assets/img17.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 17, name: 'MultGold', price: 15000, img: '/assets/img18.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 18, name: 'ByHeart', price: 15000, img: '/assets/img19.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 19, name: 'Butterfly', price: 18000, img: '/assets/img20.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 20, name: 'Blackhoop', price: 15000, img: '/assets/img21.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 21, name: 'SilverArt', price: 16000, img: '/assets/img22.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 22, name: 'FlowerLength', price: 18000, img: '/assets/img23.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
    
      //Cadenas

      { id: 23, name: 'Perlas', price: 10000, img: '/assets/img24.jpg', description: 'Este collar de perlas combina lo mejor del estilo clásico con la versatilidad moderna. Su diseño ajustable permite que lo uses de dos formas: como un elegante choker que resalta el cuello con sutileza y estilo, o en un largo más relajado para un look sofisticado y atemporal. Cada perla es seleccionada cuidadosamente para garantizar un brillo uniforme y una calidad excepcional. Este collar es ideal para cualquier ocasión, aportando un toque de distinción y adaptándose a tu estilo único.  Características: •	Material: Perlas de alta calidad con brillo natural •	Versatilidad: Úsalo como choker o en un largo medio•	Cierre ajustable para un ajuste personalizado•	Perfecto para ocasiones formales y looks casuales •	Diseño atemporal que nunca pasa de moda' },
      { id: 24, name: 'ByHeart', price: 15000, img: '/assets/img25.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 25, name: 'Choker', price: 17000, img: '/assets/img26.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 26, name: 'Snake', price: 18000, img: '/assets/img27.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 6, name: 'Colors', price: 15000, img: '/assets/img28.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
      { id: 6, name: 'Chain', price: 22000, img: '/assets/img29.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
    
  // Añade más productos y sus descripciones según sea necesario
];

const ProductDetails = ({ addToCart }) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const productId = query.get('id');
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetails;
