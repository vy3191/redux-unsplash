import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from '../components/Photo';


class PhotoList extends Component {

  render() {
    const { photos } = this.props;
    console.log('Photos>>>>>>>>>', photos)
    return (
      <div>
        <h3>Search results</h3>
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
    photos: state.photos
  }
}

export default connect(mapStateToProps, null)(PhotoList);