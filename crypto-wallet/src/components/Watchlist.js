import React from 'react';
import Button from 'react-bootstrap/Button'


const Watchlist = ({cryptos , setCryptos }) => {
  
    const handleClick = (id) => (e) => {
        console.log(e.target.value)
        const newCryptos = cryptos.map(el => { 
            if(el.id === id){
             return ({...el , watchList : false})
            }
            return el;
        })
        setCryptos(newCryptos);
     }

    const renderCryptos = cryptos.filter(crypto =>crypto.watchList === true).map(newCrypto => (
         <div>
            <h1>{newCrypto.name}</h1> <Button variant="outline-danger" onClick={handleClick(newCrypto.id)}>Delete</Button>
            <h2>Price: ${newCrypto.price} (usd)</h2> 
            <h3>Market Cap: ${newCrypto.marketCap}</h3> 
            <h3>24 Hour trend: {newCrypto.ChangePercent24Hr}%</h3>
        <hr />
        </div>
    )
        );

    

    return (
        <div>
           {renderCryptos}          
        </div>
    )
}

Watchlist.defaultProps = {
    cryptos : []
}


export default Watchlist 



