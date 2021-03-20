import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from '../components/Photo';
import loader from '../images/loader.gif'


class PhotoList extends Component {

  render() {
    const { photos, isLoading, error } = this.props;
    return (
      <div>
        <h3>Search results</h3>
        { isLoading && <img src={ loader } alt="loader" /> }
        { !isLoading && error && error.msg && <h1 style={{color:'red', fontSize: '40px'}}>{error.msg}</h1>}
        {
         !isLoading && photos.map( (photo, index) => {
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
    error: state.error
  }
}

export default connect(mapStateToProps, null)(PhotoList);