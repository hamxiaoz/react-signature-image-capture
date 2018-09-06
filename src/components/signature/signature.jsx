import React, { Component } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signature.css';

class Signature extends Component {
  constructor(props) {
    super(props);
    this.sigPad = null;
    this.state = {
      clearButtonDisabled: true
    };
  }

  clear = () => {
    this.sigPad.clear();
    this.updateClearButton();
  };

  updateClearButton = () => {
    this.setState({
      clearButtonDisabled: this.sigPad.isEmpty()
    });
  };

  render() {
    return (
      <div>
        <div className="sig-container">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 500, height: 200, className: 'sig-canvas' }}
            onEnd={this.updateClearButton}
            ref={ref => {
              this.sigPad = ref;
            }}
          />
          <button onClick={this.clear} disabled={this.state.clearButtonDisabled}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Signature;
