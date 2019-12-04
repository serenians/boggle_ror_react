import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import About from './About'
import Home from './Home'
import Contact from './Contact'

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}

export default App