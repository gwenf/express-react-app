import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Header from './components/Header'
import MainPage from './components/MainPage'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div className='row'>
            <Header />
          </div>

          <div>
            <Route exact={true} path='/' component={MainPage} />
            <Route path='/add-student' component={AddStudent} />
            <Route path='/student/:studentId/edit' component={EditStudent} />
          </div>

        </div>
	    </Router>
    );
  }
}

