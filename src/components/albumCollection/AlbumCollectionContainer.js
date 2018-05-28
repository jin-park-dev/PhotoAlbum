import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import * as albumCollectionActions from '../../actions/albumCollectionActions';
import Image from '../album/Image';

class AlbumCollectionContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadAlbumCollection();
  }

  renderImages(albumCollection) {
    return _.map(albumCollection, album => {
      return (
        <div key={album.pk}>
          <p>{album.pk}</p>
          <Image match={this.props.match} photo={album}/>
        </div>
      )
    })
  }

  render() {
    // {this.props.actions.loadAlbum()}
    // {console.log(this.props.album)}
    const {albumCollection} = this.props;
    return (
      <div>
        <div className="d-flex flex-wrap">
          {this.renderImages(albumCollection)}
        </div>
      </div>
    );
  }
}

AlbumCollectionContainer.propTypes = {
  albumCollection: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  // loadAlbumCollection: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {albumCollection: state.albumCollection};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumCollectionActions, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCollectionContainer));
