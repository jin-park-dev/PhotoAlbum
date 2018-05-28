import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import * as photoActions from "../../actions/photoActions";
import * as albumActions from "../../actions/albumActions";
import {bindActionCreators} from "redux";

class PhotoPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.albumUrl = this.albumUrl.bind(this);
  }

  componentDidMount() {
    // console.log('ComponentDidMount here');
    // console.log(this.props);
    // console.log(this.props.albumPk);
    this.props.actions.loadAlbum(this.props.albumPk);
  }

  albumUrl() {
    const curUrl = this.props.match.url;
    const id = this.props.match.params.id;

    let curUrlSplit = curUrl.split('/');
    // console.log(curUrlSplit);
    if (curUrlSplit[curUrlSplit.length-1] === id) {
      // console.log(`id matches. should almost always be true`);
      curUrlSplit.pop();
      // console.log(`curUrlSplit: ${curUrlSplit}`);
      let url = curUrlSplit.join('/');
      // console.log(url);
      return url
    } else {
      return '/'
    }


  }

  render() {
    // {this.pk = this.props.match.params.id}
    // {console.log(this.props)}
    // console.log(this.props.actions.loadPhoto(this.pk));

    const { photoPk, album } = this.props;
    const photo = album[photoPk];

    if (!photo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="photo-container-div">
          <Link to={this.albumUrl()}>
            <img src={photo.image} className="img-thumbnail PhotoPage-img" alt={photo.name}/>
          </Link>
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
  albumPk: PropTypes.string.isRequired,
  photoPk: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const photoPk = ownProps.match.params.id; // from 'album/:id'
  // console.log('here');
  // console.log(ownProps.match);
  const path = ownProps.match.url;
  const pathSplit = path.split("/");
  const albumPk = pathSplit[2];
  // console.log(path)
  // console.log(pathSplit)
  // console.log(albumPk)
  return {
    albumPk: albumPk,
    photoPk: photoPk,
    album: state.album,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumActions, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoPage));
