import React,{useState, useEffect} from 'react'
import './App.css';

import NavBar from './components/NavBar'
import Market from './containers/Market'
import Watchlist from './components/Watchlist'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


const API = " http://localhost:3001/cryptos"


function App() {
const [cryptos, setCryptos] = useState([])
const [clickedCryptos, setClickedCryptos] = useState([])

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
          <Route exact path="/market" render={props => (<Market {...props} setCryptos={setCryptos} clickedCryptos={clickedCryptos} cryptos={cryptos}/>)}/>
          <Route exact path="/Watchlist" render={props => (<Watchlist {...props}  setCryptos={setCryptos} cryptos={cryptos}/>)}  />            
      </div>
    </Router>
  );
}

export default App;






  