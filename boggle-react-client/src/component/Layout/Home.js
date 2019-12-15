import React, { Component } from 'react';

export default class Home extends Component {

  componentDidMount() {
    fetch('/api/boggle/index')
      .then(response => console.log(response))
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        Hello from Home
      </div>
    );
  }
}
