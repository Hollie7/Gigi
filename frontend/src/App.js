import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GiGiApp from './GigiApp'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={GiGiApp}/>
          <div className="container">
            <Route exact path="/chatpage" component={GiGiApp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

