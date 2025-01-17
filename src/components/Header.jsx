import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Aluraflix</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-video">Registrar Video</Link>
      </nav>
    </header>
  );
};

export default Header;
