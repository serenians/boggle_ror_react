import React, { Component } from 'react';
class Boggle extends Component {

  componentDidMount() {
    fetch('/api/boggle/index')
      .then(response => console.log(response))
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        Hello from Boggle
      </div>
    );
  }
}
export default Boggle;
