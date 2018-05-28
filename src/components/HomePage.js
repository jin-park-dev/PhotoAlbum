import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <div className="intro-container text-center">
        <h1 className="display-4">Photo Album</h1>
        <p className="lead"></p>
        <hr className="my-4" />
          <p>Photo Album created with React/Redux and Django Rest</p>
          <p className="lead">
            <Link to="/albums"><a className="btn btn-warning btn-lg" href="#" role="button">Albums Page</a></Link>
          </p>
      </div>
  );
};

export default HomePage;
