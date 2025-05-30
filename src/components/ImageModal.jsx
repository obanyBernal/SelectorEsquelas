import React from 'react';

function ImageModal({ image, onClose }) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} style={styles.fullImage} />
        <h3>{image.title}</h3>
        <button onClick={onClose} style={styles.button}>Cerrar</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    background: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
    textAlign: 'center'
  },
  fullImage: {
    maxWidth: '100%',
    maxHeight: '70vh',
    borderRadius: '8px'
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem'
  },
  title: {
  marginTop: '1rem',
  fontSize: '1.5rem',
  color: '//#endregion'
}
};

export default ImageModal;
