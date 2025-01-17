import React from 'react';
import VideoComponent from './VideoComponent';

const MyPage = () => {
  return (
    <div>
      <header>
        <h1>ALURAFLIX</h1>
      </header>
      <main>
        <VideoComponent />
      </main>
      <footer>
        <p>&copy; 2025 Francisco Muñoz. Todos los derechos reservados - Alura Latam.</p>
      </footer>
    </div>
  );
};

export default MyPage;
