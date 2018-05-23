import React, {Component} from 'react';
import {connect} from 'react-redux';

class AlbumTitle extends Component {
  render() {
    return (
      <div className="text-center" style={{borderStyle: "solid"}}>
        <div className="title-pic">
          <h1>Title - make it center</h1>
          Some image in background                      
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(AlbumTitle);

