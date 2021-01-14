import React from 'react'
import logo from '../assets/images/bootstrap-logo.svg'

const Navbar = () => {
    return (
            <nav className="navbar navbar-light bg-light">
            <div className="container">
               <a className="navbar-brand d-flex align-items-center" href="/">
               <img src={logo} alt="" width="30" height="24" className="d-inline-block align-top"/> 
               <span className="ms-2" >TodoApp</span>
               </a>
            </div>
            </nav>     
    )
}

export default Navbar
