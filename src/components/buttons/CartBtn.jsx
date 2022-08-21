import React from 'react'
import { NavLink } from 'react-router-dom'

const CartBtn = () => {
  return (
    <>
        <NavLink to="/" className='btn btn-outline-primary ms-2'>
            <i className="fa fa-shopping-cart"></i> Cart ()
        </NavLink>
    </>
  )
}

export default CartBtn