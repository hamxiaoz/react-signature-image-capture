import React, { Component } from 'react';

function PhotoPicker(props) {
  return (
    <input type="file" accept="image/*"></input>
  );
}

export default PhotoPicker;