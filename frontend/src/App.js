import React from 'react'
import { GlobalStyles } from './styles/global'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/home'
import Config from './pages/config'

const dados = () => {
  return (<div>select_root</div>)
}

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/config" component={Config}/>
        <Route path="/select_root" component={dados}/>
  
        
      </Switch>
    </Router>
  )
}

export default App
