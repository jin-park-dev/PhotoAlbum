import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as albumActions from '../../actions/albumActions';
import Image from './Image';

class PhotoContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    {this.pk = this.props.match.params.id}
    this.props.actions.loadAlbum(this.pk);
  }

  renderImages(album) {
    return _.map(album, photo => {
      return (
        <Image key={photo.pk} next={this.props.location.pathname} photo={photo}/>
      )
    })
  }

  render() {
    // {this.props.actions.loadAlbum()}
    // {console.log(this.props.album)}
    const {album} = this.props;
    return (
      <div>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoContainer));
