import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class ImagePendingView extends Component {
  render() {
    return (
      <Loader
        className="Loader"
        type="Oval"
        color="#303f9f"
        height={80}
        width={80}
      />
    );
  }
}