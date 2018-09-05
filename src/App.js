import React, { Component } from 'react';
import { Signature } from './components/signature';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="form-container">
        <Signature></Signature>
      </div>
    );
  }
}

export default App;
