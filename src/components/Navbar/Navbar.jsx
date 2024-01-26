import React from 'react'
import {NavAuth, NavUser} from './'
import "./navbar.scss"

const Navbar = () => {

   const  isAuth = true
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar_wrap">
                <div className="navbar_logo"></div>

                {
                    isAuth ? <NavAuth/>: <NavUser/>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar