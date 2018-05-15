import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as albumActions from '../../actions/albumActions';
import Image from './Image';

class PhotoContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // albumX: 'PhotoContainer-state-album-stub'
    }
  }

  componentDidMount() {
    this.props.actions.loadAlbum();
    // {console.log('album in photocontainer')};
    // {console.log(this.props.album)}
  }

  renderImages(album) {
    return _.map(album, photo => {
      return (
        <Image key={photo.pk} photo={photo}/>
        // <li className="list-group-item" key={photo.pk}>
        //   {photo.pk}. {photo.name}
        //   {/*<Link to={`/posts/${post.id}`}>{post.id}: {post.title}</Link>*/}
        // </li>
      )
    })
  }

  render() {
    // {this.props.actions.loadAlbum()}
    // {console.log(this.props.album)}
    const {album} = this.props;
    return (
      <div>
        ImagesMulti to be here...
        Many Repeats. Probaby need it's own render method for Images
        <div className="d-flex flex-wrap">
          {this.renderImages(album)}
        </div>
        {/*{console.log(album)}*/}

      </div>
    );
  }
}

PhotoContainer.propTypes = {
  album: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  // loadAlbum: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {album: state.album};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoContainer);
