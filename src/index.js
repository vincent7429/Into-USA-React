import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import BoardOfDirectors from './views/board-of-directors'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={BoardOfDirectors} exact path="/board-of-directors" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
