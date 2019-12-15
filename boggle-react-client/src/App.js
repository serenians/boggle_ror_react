import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './component/Layout/Home';
import Layout  from './component/Layout/Home';
import NavigationBar from './component/Layout/NavigationBar';
import Game from './component/Game';

class App extends Component {
  render() {
    return (
      <Game></Game>
      // <React.Fragment>
      //   <Router>
      //     <NavigationBar />
      //     <Layout>
      //       <Switch>
      //         <Route exact path="/" component={Game} />
      //         <Route exact path="/game" component={Game} />
      //       </Switch>
      //     </Layout>
      //   </Router>
      // </React.Fragment>
    );
  }
}

export default App;