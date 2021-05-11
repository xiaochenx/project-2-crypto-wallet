import React from 'react'

import CryptoList from '../components/CryptoList'




const Market = ({ cryptos , setCryptos }) => {

   
   return  <div>
             <CryptoList cryptos={cryptos} setCryptos={setCryptos} /> 
           </div>


}
export default Market

