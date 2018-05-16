import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>Photo Album</h1>
      <h2>Get Started</h2>
      <Link to="/album">Album Page</Link>
    </div>
  );
};

export default HomePage;
