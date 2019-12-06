import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {

  componentDidMount(){
    fetch('/api/boggle/index')
    .then(response=> console.log(response))
    .then(json=> console.log(json))
    .catch(error=> console.log(error))
  }

  render() {
    return (
      <div className="App">
        Hello World
    </div>
    );
  }
}
export default App;
