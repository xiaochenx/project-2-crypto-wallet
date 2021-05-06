import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import CryptoList from '../components/CryptoList'




const Market = ({ cryptos }) => {

   
   return  <div>
             <CryptoList cryptos={cryptos} />
             {/* <Route path={`${match.url}/:cryptoId`} render={routerProps => <CryptoShow {...routerProps} cryptos={cryptos} /> }/> */}
             {/* {renderDetails} */}
            
           </div>


}
export default Market

