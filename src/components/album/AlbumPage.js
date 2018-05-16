import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './AlbumTitle';
import PhotoContainer from './PhotoContainer';

const AlbumPage = () => {
  return (
    <div>
      <Title />
      <PhotoContainer />
    </div>
  );
};


AlbumPage.propTypes = {};

export default AlbumPage;
