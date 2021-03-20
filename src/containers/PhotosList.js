import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from '../components/Photo';
import loader from '../images/loader.gif'


class PhotoList extends Component {

  render() {
    const { photos, isLoading, error } = this.props;
    console.log('isLoading now', isLoading)
    return (
      <div>
        <h3>Search results</h3>
        { isLoading && <img src={ loader } alt="loader" /> }
        { error && error.msg && <p>{error.msg}</p>}
        {
          photos.map( (photo, index) => {
            return(
              <Photo photo={photo} key={index} />
            )
          })
        }
      </div>
    );
  }
}

PhotoList.propTypes = {
  photos: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    isLoading: state.loading,
    error: state.error.msg
  }
}

export default connect(mapStateToProps, null)(PhotoList);