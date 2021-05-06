import React from 'react'

const Watchlist = ({clickedCryptos}) => {
    console.log(clickedCryptos)
    const renderCryptos = clickedCryptos.map(crypto =>{

        return <div>
            <h1>{crypto.name}</h1> <button className={crypto.id}>Delete</button>
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



export default Watchlist 