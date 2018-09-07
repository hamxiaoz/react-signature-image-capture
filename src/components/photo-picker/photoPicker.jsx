import React, { Component } from 'react';

import './photoPicker.css';

class PhotoPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: false
    };

    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(event) {
    const {target} = event;
    const {files} = target;

    if (files && files[0]) {
      var reader = new FileReader();

      reader.onloadstart = () => this.setState({loading: true});

      reader.onload = event => {
        this.setState({
          data: event.target.result,
          loading: false
        });
        this.props.picked(event.target.result);
      };

      reader.readAsDataURL(files[0]);
    }
  }

  render() {
    const {data, loading} = this.state;
    const backgroundImage = data ? {backgroundImage: `url(${data})`} : null;

    return (
      <div className='photo-picker-container'>

        <input
          id={this.props.id}
          type="file"
          accept="image/*"
          capture="camera"
          onChange={this.handleFileChange}
        />

        <div
          className='preview'
          style={backgroundImage}
        >
          <label htmlFor={this.props.id}>
            {!data && !loading && <span>+</span>}
            {data && <span> </span>}
          </label>

          {loading &&
            <span>Loading...</span>
          }

        </div>
      </div>
    );
  }
}


export default PhotoPicker;
