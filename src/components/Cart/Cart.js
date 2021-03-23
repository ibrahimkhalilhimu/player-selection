import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const total = cart.reduce((sum, cart)=>sum + cart.salary,0)
       return (
        <div className="container">
            <h2 className="text-center">Selected Club</h2>
            <div className="underLine"></div>
           <h4 className="mt-5">Total Player Selected: {cart.length}</h4> 
           <h4>Total Budget: {total}</h4>

      {
          cart.map(select=>   
         <div className="row mt-4">
             <div className="col-md-12">
             <div className="selectedPlayer-cart">
          <img src={select.img} alt=""/>
          <div className="playerText">
              <h5>Name: {select.name}</h5>
              <h5>Salary: ${select.salary}</h5>
              <button className="btn ">Hide</button>
          </div>
         </div>
             </div>
         </div>
            )
      }
        </div>
    );
};

export default Cart;