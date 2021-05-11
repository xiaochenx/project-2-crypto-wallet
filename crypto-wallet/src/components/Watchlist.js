import React from 'react';
import Button from 'react-bootstrap/Button'


const Watchlist = ({cryptos , setCryptos }) => {
  
    const handleClick = (id) => (e) => {
        const newCryptos = cryptos.map(el => { 
            if(el.id === id){
             return ({...el , watchList : false})
            }
            return el;
        })
        setCryptos(newCryptos);
     }

    const renderCryptos = cryptos.filter(crypto =>{
        
        if(!crypto.watchList) return null;
        return <div>
            <h1>{crypto.name}</h1> <Button variant="outline-danger" onClick={handleClick(crypto.id)}>Delete</Button>
            <h2>Price: ${crypto.price} (usd)</h2> 
            <h3>Market Cap: ${crypto.marketCap}</h3> 
            <h3>24 Hour trend: {crypto.ChangePercent24Hr}%</h3>
        <hr />
        </div>
    }

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