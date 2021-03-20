import React from 'react'

function Photo(props) {
  const { photo, alt_description } = props;
  return (
     <img src={photo.urls.small} alt={ alt_description } />
  )
}

export default Photo
