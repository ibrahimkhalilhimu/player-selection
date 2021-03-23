import React from 'react';
import './PlayerDetails.css'
const PlayerDetails = ({player,handleSelect}) => {
    const {name,id,img,salary,PlayingRole} = player;
    return (
        <div className="col-md-4 pt-2">
        <div className="card ">
              <img  className="card-img-top img-fluid" src={img} alt="image cannot support"/>
   <div className="card-body  align-items-center"> 
    <h4 >{name}</h4>
    <h5 >{PlayingRole}</h5>
    <h5 >${salary}</h5>
    <button onClick={() =>handleSelect(player)} className="btn btn-primary">Select</button>
  </div>
  <div className="">
 
  </div>
  </div>     
    </div>
        
    );
};

export default PlayerDetails;