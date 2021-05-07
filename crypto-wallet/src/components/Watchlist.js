import React from 'react'

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

    const renderCryptos = cryptos.map(crypto =>{
        console.log({ watchlist : crypto.watchlist})
        if(!crypto.watchList) return null;
        return <div>
            <h1>{crypto.name}</h1> <button className={crypto.id} onClick={handleClick(crypto.id)}>Delete</button>
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
            {/* <h1>My Watch List</h1>
            <button>Delete</button> */}
        </div>
    )
}

Watchlist.defaultProps = {
    cryptos : []
}


export default Watchlist 