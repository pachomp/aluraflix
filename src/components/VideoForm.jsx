import React, { useState } from 'react';

const VideoForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, category, imageUrl, videoUrl, description });
    setTitle('');
    setCategory('');
    setImageUrl('');
    setVideoUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoría" required />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enlace de la Imagen" required />
      <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="Enlace del Video" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required></textarea>
      <button type="submit">Guardar</button>
      <button type="button" onClick={() => { setTitle(''); setCategory(''); setImageUrl(''); setVideoUrl(''); setDescription(''); }}>Limpiar</button>
    </form>
  );
};

export default VideoForm;
