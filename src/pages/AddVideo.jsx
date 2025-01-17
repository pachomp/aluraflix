import React, { useState } from 'react';
import Header from '../components/Header';
import VideoForm from '../components/VideoForm';

const AddVideo = () => {
  const [videos, setVideos] = useState([]);

  const handleSave = (newVideo) => {
    setVideos([...videos, { ...newVideo, id: Date.now() }]);
  };

  return (
    <div>
      <Header />
      <VideoForm onSave={handleSave} />
    </div>
  );
};

export default AddVideo;
