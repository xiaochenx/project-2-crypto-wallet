import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';
import CryptoShow from '../components/CryptoShow'
import CryptoList from '../components/CryptoList'




const Market = ({ match, cryptos }) => {
   return  <div>
             <CryptoList cryptos={cryptos}/>
             <Route exact path={match.url} render={() => <h3>Choose a crypto from the list above</h3>}/>
             <Route path={`${match.url}/:cryptoID`} render={routerProps => <CryptoShow {...routerProps} cryptos={cryptos} /> }/>
           </div>

}



export default Market