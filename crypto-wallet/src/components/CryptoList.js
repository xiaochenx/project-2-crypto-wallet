import React from 'react'
import { Link, Route }from 'react-router-dom'
import CryptoShow from '../components/CryptoShow'

 const CryptoList = ({cryptos}) => {
     console.log(cryptos)

     const cryptoDetails = (e) => {
         console.log(e)
        return e.target.innerText
       

     }

     const renderCryptos = cryptos.map(crypto =>
        <Link className='cryptoName' key={crypto.id} to={`/cryptos/${crypto.id}`} onClick={cryptoDetails} value={crypto}>{crypto.name}</Link>,
        
     );

    //  const renderPrice = cryptos.map()
            
    return (
        <div>
            {renderCryptos}
        </div>
                    )
}
export default CryptoList