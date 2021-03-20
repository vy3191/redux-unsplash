import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


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

PhotoList.propTypes = {
  photos: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, null)(PhotoList);