import React from 'react'
import { Link, Route }from 'react-router-dom'
import Watchlist from './Watchlist'



 const CryptoList = ({cryptos}) => {
    
    
    
    
    
    const handleClick = (e) => {
        console.log(e)
    }


     const renderCryptos = cryptos.map(crypto =>
        <div>
            <h1>{crypto.name}</h1> <button className={crypto.id} onClick={handleClick}>Add</button>
            <h2>Price: ${crypto.price} (usd)</h2> 
            <h3>Market Cap: ${crypto.marketCap}</h3> 
            <h3>24 Hour trend: {crypto.ChangePercent24Hr}%</h3>
        <hr />
        </div>
     );

   
            
    return (
        <div>
            {renderCryptos}
            <h1>Wish list</h1>
            <hr />
            <Watchlist />
          
            {/* <Route path={`/market/${crypto.id}`} render={props => (<CryptoShow {...props} cryptos={cryptos}/>)}/> */}
        </div>
                    )
}
export default CryptoList