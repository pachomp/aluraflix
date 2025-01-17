import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onDelete, onEdit }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default VideoList;
