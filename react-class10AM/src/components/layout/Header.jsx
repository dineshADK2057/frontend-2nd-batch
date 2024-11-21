import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Link to="/">Digital Clock</Link>
        <Link to="/textapp">text app</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/products">Products</Link>
      
    </>
  )
}

export default Header
