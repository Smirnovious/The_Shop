import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CartBtn = () => {
  const cart = useSelector(state => state.cart)
  return (
    <>
        <NavLink to="/cart" className='btn btn-outline-primary ms-2'>
            <i className="fa fa-shopping-cart"></i> Cart({cart.length})
        </NavLink>
    </>
  )
}

export default CartBtn