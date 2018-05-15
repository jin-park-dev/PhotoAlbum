import React from 'react';
import PropTypes from 'prop-types';

const Image = ({photo}) => {
  return (
    <div className="" style={{borderStyle: "solid"}}>
      {photo.pk}. {photo.name}
      {/*<img src={photo.image} className="img-thumbnail" width="128" height="128" alt={photo.pk}/>*/}
      <img src={photo.image} className="test" alt={photo.pk}/>
      {/*1-Image-Here-Passed with Props*/}
    </div>
  );
};

Image.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Image;
