import React from 'react';
import '../css/ImageModal.css';

function ImageModal({ image, onClose }) {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} className="image-modal-img" />
        <h3 className="image-modal-title">{image.title}</h3>
        <button onClick={onClose} className="image-modal-button">Cerrar</button>
      </div>
    </div>
  );
}

export default ImageModal;
