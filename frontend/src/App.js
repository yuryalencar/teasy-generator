import React from 'react'
import {GlobalStyles} from './styles/global'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import Home from './pages/home'
import Config from './pages/config'
import SelectRoot from './pages/selectRoot'
import MakeTree from './pages/makeTree'
import {JsonProvider} from "./context";


function App() {
  return (
	  <JsonProvider>
		<Router>
		  <GlobalStyles/>
		  <ToastContainer/>
		  <Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/config" component={Config}/>
			<Route path="/selectRoot" component={SelectRoot}/>
			<Route path="/makeTree" component={MakeTree}/>
		  </Switch>
		</Router>
	  </JsonProvider>
  )
}

export default App
