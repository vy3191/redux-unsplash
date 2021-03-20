import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions'

class PhotoList extends Component {

  render() {
    const { photos } = this.props
    return (
      <div>
        <h3>Search results</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, null)(PhotoList);