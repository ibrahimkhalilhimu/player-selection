import React, { useState } from 'react';
import './PlayerList.css'
import data from '../../Data/Data';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import Cart from '../Cart/Cart';
const PlayerList = () => {
    const [playerList,setPlayerList] = useState(data)
    const [cart,setCart] = useState([])
    const handleSelect = (playerList) => {
       const newCart = [...cart,playerList]
       setCart(newCart)
    }
    const [input,setInput] = useState("")
    const handleChange =(e) => {
    e.preventDefault()
    setInput(e.target.value)
  
    }
    if (input.length>0) {
        
       playerList.filter((i)=>{
            return i.name.match(input)
        })
    }
  
    console.log(input);
    return (
<div className="container"> 
<input type="text"
onChange={handleChange}
value={input}
placeholder="Search the player"/>
          <div className="row">
          <div className="col-md-8 player-list">
        <div className="row">
        {
               playerList.map(player => <PlayerDetails player={player} handleSelect={handleSelect} key={player.id}></PlayerDetails>)
           }
        </div>
           </div>
            <div className="col-md-4 mt-3">
                <Cart cart={cart}/>
            </div>
          </div>
          </div> 
        
    );
};

export default PlayerList;