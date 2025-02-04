import { useState, useEffect } from 'react';
import './Album.css';

function Album() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [clave, setClave] = useState('');
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Estado para el índice de la imagen seleccionada

  // Fetch images on clave change
  useEffect(() => {
    const fetchImages = async () => {
      if (!clave) return; // Skip fetch if clave is empty
    
      try {
        const response = await fetch(`https://www.travelertours.com.mx/claves.php?key=${clave}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No se encontró el recurso solicitado.');
          }
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        setUploadedImages(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Error al buscar imágenes.');
      }
    };

    if (clave) {
      fetchImages();
    }
  }, [clave]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClave(e.target.clave.value);
  };

  const handleDownload = (image) => {
    const a = document.createElement('a');
    a.href = image.img; // Usa la URL de la imagen directamente
    a.download = 'imagen.jpg'; // Nombre del archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShare = (image) => {
    const url = image.img; // Usa la URL de la imagen directamente
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Establece el índice de la imagen seleccionada para mostrar en el modal
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null); // Cierra el modal
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % uploadedImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + uploadedImages.length) % uploadedImages.length);
  };

  return (
    <div className="album-page">
      <div className="album-overlay"></div>
      <section className="albumSec" id="album">
        <h1>Album de aventuras</h1>
        <form className="album-form" onSubmit={handleSubmit}>
          <label htmlFor="clave">Clave:</label>
          <input
            type="text"
            id="clave"
            name="clave"
            placeholder="Escribe tu clave"
            required
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="image-gallery">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-item" onClick={() => handleImageClick(index)}>
              <img src={image.img} alt="Imagen cargada" />
            </div>
          ))}
        </div>
        {selectedImageIndex !== null && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <span className="close-button" onClick={handleCloseModal}>&times;</span>
                <img src={uploadedImages[selectedImageIndex] .img} alt="Imagen ampliada" />
                <div className="image-actions">
                  <button onClick={() => handleDownload(uploadedImages[selectedImageIndex])}>Descargar</button>
                  <button onClick={() => handleShare(uploadedImages[selectedImageIndex])}>Compartir</button>
                </div>
                <div className="navigation-buttons">
                  <button onClick={handlePrevImage} className="nav-button">◀</button>
                  <button onClick={handleNextImage} className="nav-button">▶</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Album;