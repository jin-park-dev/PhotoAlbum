import React from 'react';
import PropTypes from 'prop-types';

const Image = ({photo}) => {
  return (
    <div className="image-container-div">
      {/*<img src={photo.image} className="img-thumbnail" width="128" height="128" alt={photo.pk}/>*/}
      <img src={photo.image} className="img-thumbnail" alt={photo.pk}/>
      {/*{photo.pk}. {photo.name}*/}
    </div>
  );
};

Image.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Image;
