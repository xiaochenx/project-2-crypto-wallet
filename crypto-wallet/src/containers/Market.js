import React from 'react'

import CryptoList from '../components/CryptoList'




const Market = ({ cryptos , setCryptos }) => {

   
   return  <div>
             <CryptoList setCryptos={setCryptos} cryptos={cryptos} /> 
           </div>


}
export default Market

