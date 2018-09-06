import React, { Component } from 'react';
import { Signature } from './components/signature';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.signature = null;
  }

  onSubmit = () => {
    console.log(this.signature.getDataURL());
  }

  render() {
    return (
      <div className="form-container">
        <Signature ref={ref => this.signature = ref}></Signature>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
