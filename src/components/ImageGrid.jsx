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
  { id: 11, src: '/miniaturas/fondo11.png', title: 'Fondo 11' },
  { id: 12, src: '/miniaturas/fondo12-rosa.png', title: 'Fondo 12 Rosa' },
  { id: 13, src: '/miniaturas/fondo12-azul.png', title: 'Fondo 12 Azul' },
  { id: 14, src: '/miniaturas/fondo13.png', title: 'Fondo 13' },
  { id: 15, src: '/miniaturas/fondo14.png', title: 'Fondo 14' },
  { id: 16, src: '/miniaturas/fondo15.png', title: 'Fondo 15' },
];

function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-grid-wrapper">
      <h1>Selector de Esquelas</h1>
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
