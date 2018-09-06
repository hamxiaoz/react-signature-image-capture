import React, { Component } from 'react';
import { Signature } from './components/signature';
import './App.css';
import { PhotoPicker } from './components/photo-picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.signature = null;
  }

  onSubmit = () => {
    console.log(this.signature.getDataURL());
  };

  render() {
    return (
      <div className="app">
        <div className="photo-pickers">
          <label>4 Corner Photos</label>
          <PhotoPicker />
        </div>
        <Signature ref={ref => (this.signature = ref)} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
