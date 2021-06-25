import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import React from 'react'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Nav from './Nav'
import Footer from '../components/Footer'

function App() {

  

  return (
    <Router >
      <Nav/>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Redirect from="/" to="/home"/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
