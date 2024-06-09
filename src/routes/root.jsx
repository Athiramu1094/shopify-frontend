import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root(props)  {
  return (
    <>
         <header className='shadow-lg' >
        <div className='container flex flex-row justify-between items-center h-20' >
            <h1>Shopify</h1>
        <nav>
        <ul className='navlist flex flex-row  gap-6'>
            
            <li>
            <Link to="/" className='navlink'>Home</Link>
            </li>
            <li>
            <Link to="/categories" className='navlink'>Categories</Link>
            </li>
            <li>
            <Link to="/signup" className='navlink'>Signup</Link>
            </li>
            <li>
            <Link to="/contact" className='navlink'>Contact</Link>
            </li>
            
        </ul>
        </nav>
        </div>
        </header>
        <Outlet/>
        
        <footer></footer>
    </>
  )
}

export default Root