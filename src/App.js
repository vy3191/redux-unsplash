import React, { Component } from 'react';
import Search from './Containers/Search';
import PhotoList from './Containers/PhotosList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get your photos</h1>
        </header>
        <Search />
        <PhotoList />        
      </div>
    );
  }
}

export default App;
