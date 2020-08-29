import React from 'react'
import { GlobalStyles } from './styles/global'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Home from './pages/home'
import Config from './pages/config'
import SelectRoot from './pages/selectRoot'
import MakeTree from './pages/makeTree'

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/config" component={Config}/>
        <Route path="/select_root" component={SelectRoot}/>
        <Route path="/make_tree" component={MakeTree}/>
      </Switch>
    </Router>
  )
}

export default App