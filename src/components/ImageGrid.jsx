import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../css/ImageGrid.css'; // Importamos el archivo CSS

const images = [
  { id: 1, src: '/miniaturas/fondo1.png', title: 'Fondo 1' },
  { id: 2, src: '/miniaturas/fondo2.png', title: 'Fondo 2' },
  { id: 3, src: '/miniaturas/fondo3.png', title: 'Fondo 3' },
  { id: 4, src: '/miniaturas/fondo4.png', title: 'Fondo 4' },
  { id: 5, src: '/miniaturas/fondo5.png', title: 'Fondo 5' },
  { id: 6, src: '/miniaturas/fondo6.png', title: 'Fondo 6' },
  { id: 7, src: '/miniaturas/fondo7.png', title: 'Fondo 7' },
  { id: 8, src: '/miniaturas/fondo8.png', title: 'Fondo 8' },
  { id: 9, src: '/miniaturas/fondo9.png', title: 'Fondo 9' },
  { id: 10, src: '/miniaturas/fondo10.png', title: 'Fondo 10' },
  { id: 11, src: '/miniaturas/fondo11.png', title: 'Fondo 11 azul' },
  { id: 12, src: '/miniaturas/fondo12.png', title: 'Fondo 12 rosa' },
  { id: 13, src: '/miniaturas/fondo13.png', title: 'Fondo 13' },
  { id: 14, src: '/miniaturas/fondo14.png', title: 'Fondo 14' },
  { id: 15, src: '/miniaturas/fondo15.png', title: 'Fondo 15' },
  { id: 16, src: '/miniaturas/fondo16.png', title: 'Fondo 16' },
  { id: 17, src: '/miniaturas/fondo17.png', title: 'Fondo 17' },
  { id: 18, src: '/miniaturas/fondo18.png', title: 'Fondo 18' },
  { id: 19, src: '/miniaturas/fondo19.png', title: 'Fondo 19' },
  { id: 20, src: '/miniaturas/fondo20.png', title: 'Fondo 20' },
  { id: 21, src: '/miniaturas/fondo21.png', title: 'Fondo 21' },
  { id: 22, src: '/miniaturas/fondo22.png', title: 'Fondo 22' },
  { id: 23, src: '/miniaturas/fondo23.png', title: 'Fondo 23' },
  { id: 24, src: '/miniaturas/fondo24.png', title: 'Fondo 24 celeste' },
  { id: 25, src: '/miniaturas/fondo25.png', title: 'Fondo 25 rosa' },
  { id: 26, src: '/miniaturas/fondo26.png', title: 'Fondo 26' },
  { id: 27, src: '/miniaturas/fondo27.png', title: 'Fondo 27' },
  { id: 28, src: '/miniaturas/fondo28.png', title: 'Fondo 28' },
  { id: 29, src: '/miniaturas/fondo29.png', title: 'Fondo 29' },
  { id: 30, src: '/miniaturas/fondo30.png', title: 'Fondo 30' },
  { id: 31, src: '/miniaturas/fondo31.png', title: 'Fondo 31' },
  { id: 32, src: '/miniaturas/fondo32.png', title: 'Fondo 32' },
  { id: 33, src: '/miniaturas/fondo33.png', title: 'Fondo 33' },
  { id: 34, src: '/miniaturas/fondo34.png', title: 'Fondo 34' },
  { id: 35, src: '/miniaturas/fondo35.png', title: 'Fondo 35' },
  { id: 36, src: '/miniaturas/fondo36.png', title: 'Fondo 36' },
  { id: 37, src: '/miniaturas/fondo37.png', title: 'Fondo 37' },
];

function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-grid-wrapper">
      <h1>Selector de Fondos</h1>
      <p>Puedes 
       seleccionar una imagen para verla, en la parte inferior
       podrás ver el número de fondo </p>
      <div className="image-grid">
        {images.map((img) => (
          <div key={img.id} className="image-card" onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.title} className="image-thumbnail" />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default ImageGrid;
