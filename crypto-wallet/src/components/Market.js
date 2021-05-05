import React, { Component } from 'react'
import { Link } from 'react-router-dom'


 const Market = ({ cryptos }) => {
     const renderCryptos = Object.keys(cryptos).map(cryptoID =>
        <Link className='cryptoName' key={cryptoID} to={`/cryptos/${cryptoID}`}>{cryptos[cryptoID].name}</Link>
        );

        return (
            <div>
                {renderCryptos}
            </div>
        )
 }
export default Market