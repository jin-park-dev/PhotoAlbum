import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PhotoContainer from './PhotoContainer';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Title/>
        <PhotoContainer/>
      </div>
    );
  }
}

MyComponent.propTypes = {};

export default MyComponent;
