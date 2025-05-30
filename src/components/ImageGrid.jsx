import React, { useState } from 'react';
import ImageModal from './ImageModal';

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
  { id: 12, src: '/miniaturas/fondo12a.png', title: 'Fondo 12A' },
  { id: 13, src: '/miniaturas/fondo12b.png', title: 'Fondo 12B' },
  { id: 14, src: '/miniaturas/fondo13.png', title: 'Fondo 13' },
  { id: 15, src: '/miniaturas/fondo14.png', title: 'Fondo 14' },
  { id: 16, src: '/miniaturas/fondo15.png', title: 'Fondo 15' },
];


function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div style={styles.grid}>
        {images.map((img) => (
          <div key={img.id} style={styles.card} onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.title} style={styles.thumbnail} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '1rem',
    padding: '1rem'
  },
  card: {
    cursor: 'pointer',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    borderRadius: '8px'
  }
};

export default ImageGrid;
