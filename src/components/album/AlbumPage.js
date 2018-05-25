import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './AlbumTitle';
import AlbumContainer from './AlbumContainer';

const AlbumPage = () => {
  return (
    <div>
      <Title />
      <AlbumContainer />
    </div>
  );
};


AlbumPage.propTypes = {};

export default AlbumPage;
