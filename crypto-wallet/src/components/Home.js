import React, {useState} from 'react'


 const Home = ({API,cryptos , setCryptos}) => {
     const [name, setName] = useState("1")
     const [rank, setRank] = useState("1")
     const [price, setPrice] = useState("1")
     const [marketCap, setCap] = useState("1")
     const [ChangePercent24Hr, set24Change] = useState("1")

     const handleName = (event) => {
         console.log(event.target.value)
         setName(event.target.value)
     }
     
     const handleRank = (event) => {
        console.log(event.target.value)
        setRank(event.target.value)
    }

    const handlePrice = (event) => {
        console.log(event.target.value)
        setPrice(event.target.value)
    }
    const handleCap = (event) => {
        console.log(event.target.value)
        setCap(event.target.value)
    }
    const handle24h = (event) => {
        console.log(event.target.value)
        set24Change(event.target.value)
    }

    function getCryptos(){
        fetch(API)
        .then(r => r.json())
        .then(data => {
          console.log(data)
            const allCryptos = data.map(c => {
              return {...c}
            })
            setCryptos(allCryptos)
            
        })
    }


     const handleSubmit = (event) => {
         event.preventDefault()
         fetch(API,{
            method: "POST",
            headers:{'Accept':'application/json',
                  'Content-Type': 'application/json'
                  },
            body:JSON.stringify({name,rank,price,marketCap,ChangePercent24Hr,watchList : false, livePrice : "https://coinmarketcap.com/"})

         })
          .then(res => res.json())
          .then(() => {
            getCryptos()
        }
            )
            alert("New Crypto Added Successfully!")
     }

    return (
        <div>
            <h1>Welcome to Your Crypto Wallet</h1>
           <form  onSubmit={handleSubmit}>
               <label for="name">Name</label>
               <input type="text" name="name" onChange={handleName}/>
               <br />
               <label for="rank">Rank</label>
               <input type="text" name="rank" onChange={handleRank}/>
               <br />
               <label for="price">Price</label>
               <input type="text" name="price" onChange={handlePrice}/>
               <br />
               <label for="marketCap">Market Cap</label>
               <input type="text" name="marketCap" onChange={handleCap}/>
               <br />
               <label for="ChangePercent24Hr">24h Change</label>
               <input type="text" name="ChangePercent24Hr" onChange={handle24h}/>
               <input type="submit" />
           </form>
        </div>
    )
}

export default Home