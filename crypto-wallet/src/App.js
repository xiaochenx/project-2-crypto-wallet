import React from 'react'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Market from './components/Market'
import Wallet from './components/Wallet'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Route exact path="/" component={Home}  /> 
          <Route exact path="/market" component={Market}  /> 
          <Route exact path="/wallet" component={Wallet}  />            
      </div>
    </Router>
  );
}

export default App;






  