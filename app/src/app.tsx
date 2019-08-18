import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReduxStore from './redux/store'
import { Routes } from './routing'

const App = () => (
  <ReduxStore>
    <Router>
      <Routes/>
    </Router>
  </ReduxStore>
)

export default App
