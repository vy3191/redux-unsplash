import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPhotos } from '../actions'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    getPhotos(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <h2>Start your search here</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name of the pic</label>
          <input 
            type="text"
            name="text"
            onChange ={ this.handleInput }
            value = { this.state.text }
          />
          <button>Enter</button>  
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  getPhotos: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: function(query) {
      dispatch(getPhotos(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);