import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { setUserLoggedIn } from '../features/features/login/loginSlice';


function Root(props)  {

  const userLoggedIn = useSelector(state =>
    state.login.userLoggedIn //login is slice
  )
  const dispatch = useDispatch() //calls the reducer function inside the slice

  useEffect(()=>{
    axios.get(`http://localhost:3000/auth/verify`,{
      withCredentials:true })
      .then(response=>{
        dispatch(setUserLoggedIn(true))
      })//req to backend to verify that user is loggedin or not using useeffect,to check if there is cookies or not.

      .catch(error=>{
        dispatch(setUserLoggedIn)(false)
      })
   
    }, []); // Added empty dependency array to run effect only once on mount




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
            <Link to="/contact" className='navlink'>Contact</Link>
            </li>
            
            <li>
            <Link to="/cart">
            <span className="material-symbols-outlined">
            local_mall
          </span>
          </Link>
          </li>
            {
              userLoggedIn? <li>
              <Link to="/logout" className='navlink'>Logout</Link>
              </li> : <li>
            <Link to="/login" className='navlink'>Login</Link>
            </li>
            
            }
          
            
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