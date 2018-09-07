import React, { Component } from 'react';
import { Signature } from './components/signature';
import './App.css';
import { PhotoPicker } from './components/photo-picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.signature = null;
    this.state = {
      corner1: '',
      corner2: '',
      corner3: '',
      corner4: '',
      signature: ''
    };
  }

  onSubmit = () => {
    console.log(this.signature.getDataURL());
    this.setState({
      signature: this.signature.getDataURL()
    });
  };

  handlePhotoPicked = (corner, data) => {
    this.setState({
      [corner]: data
    });
  };

  render() {
    return (
      <div className="app">
        <div>
          <label>4 Corner Photos</label>
          <div className="photo-pickers">
            <PhotoPicker id="corner1" picked={data => this.handlePhotoPicked('corner1', data)} />
            <PhotoPicker id="corner2" picked={data => this.handlePhotoPicked('corner2', data)} />
            <PhotoPicker id="corner3" picked={data => this.handlePhotoPicked('corner3', data)} />
            <PhotoPicker id="corner4" picked={data => this.handlePhotoPicked('corner4', data)} />
          </div>
        </div>
        <Signature ref={ref => (this.signature = ref)} />
        <button onClick={this.onSubmit}>Submit</button>

        <hr />
        <p>Debug:</p>
        <p>coner1: {this.state.corner1}</p>
        <p>coner2: {this.state.corner2}</p>
        <p>coner3: {this.state.corner3}</p>
        <p>coner4: {this.state.corner4}</p>
        <p>signature: {this.state.signature}</p>
      </div>
    );
  }
}

export default App;
