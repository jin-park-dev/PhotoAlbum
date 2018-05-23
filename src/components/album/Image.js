import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Image = ({photo, next}) => {
  return (
    <div>
      <Link to={next + '/' + photo.pk}>
        <div className="image-container-div">
          <img src={photo.image} className="img-thumbnail" alt={photo.pk}/>
          {/*{photo.pk}. {photo.name}*/}
        </div>
      </Link>
    </div>
  );
};

Image.propTypes = {
  photo: PropTypes.object.isRequired,
  next: PropTypes.string.isRequired,
};

export default Image;
