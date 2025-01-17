import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ video, onDelete, onEdit }) => {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>{video.category}</p>
      <img src={video.imageUrl} alt={video.title} />
      <p>{video.description}</p>
      <button onClick={() => onEdit(video)}>Editar</button>
      <button onClick={() => onDelete(video.id)}>Eliminar</button>
    </div>
  );
};

export default VideoCard;
