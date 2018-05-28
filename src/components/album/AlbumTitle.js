import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as albumActions from "../../actions/albumActions";
import * as albumCollectionActions from "../../actions/albumCollectionActions";

class AlbumTitle extends Component {

  componentDidMount() {
    this.pk = this.props.match.params.id;
    this.props.actions.loadAlbumCollection(this.pk);

  }

  render() {

    const { albumCollection } = this.props;


    if (!albumCollection) {
      return <div>Loading...</div>;
    }

    let albumDetail = albumCollection[this.pk];

    if (!albumDetail) {
      return <div>Loading...</div>;
    }

    const style_albumTitle = {
      borderStyle: "solid",
      backgroundImage: `url(${albumDetail.image})`,
      // backgroundClip: "content-box",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };


    return (
      <div className="text-center albumtitle-container">
      {/*<div className="text-center" style={style_albumTitle}>*/}
        <div className="title-pic">
          <h1>{albumDetail.name}</h1>
          <h6>{albumDetail["description"]}</h6>
        </div>
      </div>
    );
  }
}

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
)(AlbumTitle));
