
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import PropTypes from 'prop-types'
import App from "../components/App";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
