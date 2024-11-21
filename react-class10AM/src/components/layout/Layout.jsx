import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>

        <br /><br />

        <Outlet/>

        <br /><br />

        <footer>
            this is footer
        </footer>
      
    </>
  )
}

export default Layout
