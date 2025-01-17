import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoComponent = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [videos, setVideos] = useState([
    'https://www.youtube.com/embed/U4ML_VIEwX0',
    'https://www.youtube.com/embed/another-video-url',
    'https://www.youtube.com/embed/yet-another-video-url'
  ]);

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = () => {
    setVideos([...videos, videoUrl]);
    setSubmittedUrl(videoUrl);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registrar Video</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa la URL del video"
          value={videoUrl}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>Agregar Video</button>
      </div>
      {submittedUrl && (
        <div className="card mb-3">
          <div className="card-body">
            <iframe
              width="100%"
              height="315"
              src={submittedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <h2 className="text-center mb-4">Videos</h2>
      <div className="row">
        {videos.map((url, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                <iframe
                  width="100%"
                  height="200"
                  src={url}
                  title={`YouTube video player ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
