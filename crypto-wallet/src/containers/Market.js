import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import CryptoList from '../components/CryptoList'




const Market = ({ cryptos , setClickedCryptos , clickedCryptos }) => {

   
   return  <div>
             <CryptoList setClickedCryptos={setClickedCryptos} clickedCryptos={clickedCryptos}  cryptos={cryptos} />
             {/* <Route path={`${match.url}/:cryptoId`} render={routerProps => <CryptoShow {...routerProps} cryptos={cryptos} /> }/> */}
             {/* {renderDetails} */}
            
           </div>


}
export default Market

