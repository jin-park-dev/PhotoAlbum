import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as albumActions from "../../actions/albumActions";
import {bindActionCreators} from "redux";

class PhotoPage extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  componentDidMount() {
    this.props.actions.loadAlbum();
  }

  render() {
    const { pk, album } = this.props;
    const photo = album[pk];

    if (!photo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="photo-container-div">
          <a href={photo.image}>
            <img src={photo.image} className="img-thumbnail PhotoPage-img" alt={photo.name}/>
          </a>
        </div>
        <div className="d-flex justify-content-center">
          {photo.name}
        </div>

      </div>
    );
  }
}

PhotoPage.propTypes = {};


PhotoPage.propTypes = {
  album: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  // loadAlbum: PropTypes.func.isRequired
  pk: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const pk = ownProps.match.params.id; // from 'album/:id'
  return {
    album: state.album,
    pk: pk
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoPage);
