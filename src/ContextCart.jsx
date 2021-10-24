import React, {useState , useContext } from 'react'
import Itemapi from './Itemapi';
import CartContext from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ContextCart = () => {
  const [cart, setCart] = useState([]);
 const [CartItem, setCartItem] = useState(0)
    const decrement = () => {
        if (CartItem > 0)
        {
        return (setCartItem(CartItem-1))
        }
        else {
        setCartItem(0);
        }


    }
  const increment = () => {
    return (
      setCartItem(CartItem+1)
    );
  }
    return (
        <>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">Shopholics</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
     
     
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <FontAwesomeIcon className="ShoppingCart" icon ={  faShoppingCart }></FontAwesomeIcon>
    <div className="cartQuantity">{CartItem} </div>
  </div>
</nav>
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
        <div className="inc-dec"><button className="increment"onClick={increment}>+</button></div>
   <div className="inc-dec"><a href="#" class="btn btn-primary" onClick={increment}>Add To Cart</a></div> 
   <div className="inc-dec"><button className="decrement" onClick={decrement}>-</button></div>
    </div>

  
</div>

                </>

            )
        })}
          </div>
            
        </>
    )
}

export default ContextCart
