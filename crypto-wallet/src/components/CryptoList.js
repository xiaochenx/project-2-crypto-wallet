import React from 'react'





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



    const deleteCrypto = (id) => (e) => {
        if(window.confirm('Are you sure?'))
        {
            fetch('http://localhost:3001/cryptos/'+id, {
                method: "DELETE",
                headers:{'Accept':'application/json',
                'Content-Type': 'application/json'
                }
            })
        }
        console.log({cryptos})
    }

     const renderCryptos = cryptos.map(crypto =>
        <div>
            <h1>{crypto.name}</h1> <button onClick={handleClick(crypto.id)}>Add</button>
            <button onClick={deleteCrypto(crypto.id)}>Permenantly Delete</button> 
            <h3>Rank: {crypto.rank}</h3>
            <h2>Price: ${crypto.price} (usd)</h2> 
            <h3>Market Cap: ${crypto.marketCap}</h3> 
            <h3>24 Hour trend: {crypto.ChangePercent24Hr}%</h3>
            <a href={crypto.livePrice}>Live Price</a>
            
        <hr />
        </div>
     );

   
            
    return (
        <div>
            {renderCryptos}
        </div>
                    )
}
export default CryptoList