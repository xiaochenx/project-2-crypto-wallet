import React from 'react'


 const CryptoShow = ({match, cryptos}) => {
     
    return (
        <div>
            <h3>Name: {cryptos[match.params.cryptoID].name}</h3>
            <h4>Price: {cryptos[match.params.cryptoID].price}</h4>
            <h4>Market Cap: ${cryptos[match.params.cryptoID].marketCap}</h4>
            <p>24 Hour Change: {cryptos[match.params.cryptoID].ChangePercent24Hr} </p>
            <button>Buy</button>
        </div>
    )
}

export default CryptoShow