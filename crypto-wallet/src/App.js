import React,{useState, useEffect} from 'react'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Market from './components/Market'
import Wallet from './components/Wallet'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


const API = " http://localhost:3001/cryptos"


function App() {
const [cryptos, setCryptos] = useState([])
const [budget, setBudget] = useState([ 200000])

useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      console.log(data)
        const allCryptos = data.map(c => {
          return {...c}
        })
        setCryptos(allCryptos)
        
    })
}, [])



  return (
    <Router>
      <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <div><h1>Welcome to Your Crypto Wallet</h1></div>  }/>
          <Route exact path="/market" render={props => (<Market {...props} cryptos={cryptos}/>)}/>
          <Route exact path="/wallet" component={Wallet}  />            
      </div>
    </Router>
  );
}

export default App;






  