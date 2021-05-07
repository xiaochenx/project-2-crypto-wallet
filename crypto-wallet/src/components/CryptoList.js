import React,{useState} from 'react'
import { Link, Route }from 'react-router-dom'
import Watchlist from './Watchlist'



 const CryptoList = ({cryptos , setCryptos }) => {
     

    const handleClick = (id) => (e) => {
       const newCryptos = cryptos.map(el => { 
           if(el.id === id){
            return ({...el , watchList : true})
           }
           return el;
       })
       setCryptos(newCryptos);
    }


     const renderCryptos = cryptos.map(crypto =>
        <div>
            <h1>{crypto.name}</h1> <button className={crypto.id} onClick={handleClick(crypto.id)}>Add</button>
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
            {/* <Watchlist clickedCryptos={clickedCryptos}/> */}
          
            {/* <Route path={`/market/${crypto.id}`} render={props => (<CryptoShow {...props} cryptos={cryptos}/>)}/> */}
        </div>
                    )
}
export default CryptoList