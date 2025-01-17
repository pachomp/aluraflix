import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import VideoList from '../components/VideoList';
import Footer from '../components/Footer';

const Home = () => {
  const [videos, setVideos] = useState([]);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (updatedVideo) => {
    setVideos(videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

  return (
    <div>
      <Header />
      <Banner />
      <VideoList videos={videos} onDelete={handleDelete} onEdit={handleEdit} />
      <Footer />
    </div>
  );
};

export default Home;
