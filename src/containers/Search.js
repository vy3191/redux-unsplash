import React, { Component } from 'react';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.text);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <h2>Start your search here</h2>
        <form>
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

export default componentName;