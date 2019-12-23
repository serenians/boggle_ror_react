import React, { Component } from 'react';
import Game from './component/Game';
import ReactNotifications from 'react-notifications-component';

class App extends Component {
  render() {
    return (
      <div>
      <ReactNotifications />
      <Game></Game>
    </div>
    );
  }
}

export default App;