import React from "react";
import { CartContext } from "../context/CartContext";
import CartItem from '../components/CartItem/CartItem';
import { useNavigate } from "react-router-dom";


export default function Cart () {
  const {cart, deleteAll}  = React.useContext(CartContext);
  const cartVacio = "El carrito se encuentra vacio!"
  const {totalCart} = React.useContext(CartContext);
  const navegar = useNavigate()
    return(
      <div className="d-flex">
        <h1>Este es tu carrito</h1>
        <div>
        {
          cart.length === 0
          ? cartVacio
          : <>
          {cart.map((cartItem)=> <CartItem cartItem={cartItem} key={cartItem.id}/>)}
          <p>Total: {totalCart()} </p>
          <button className="btn-success" onClick={() => navegar('/checkout')}>Confirmar compra</button>
          <button onClick={deleteAll}>Vaciar Carrito</button>
          </>
        }
        </div>
        
      </div>
    )
  }