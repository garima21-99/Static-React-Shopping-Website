import React from 'react';
import Itemapi from './Itemapi';

const Items = () => {
    return (
        <>
       <div className="ItemS-container">
           {
        Itemapi.map((curElem) => {
            return (
                <>
                 <div class="card">
  <img className="card-img-top" src={curElem.image} alt="Card image cap"/>
  
    <h5 className="card-title">{curElem.tittle}</h5>
    <p className="card-text">{curElem.price}</p>
    <div className="add-to-cart-container">
        <div className="inc-dec"><button className="increment">+</button></div>
   <div className="inc-dec"><a href="#" class="btn btn-primary">Add To Cart</a></div> 
   <div className="inc-dec"><button className="decrement">-</button></div>
    </div>

  
</div>

                </>

            )
        })}
          </div>
          </>
    )
    }

export default Items
