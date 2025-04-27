import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/dropdown_red.png'


const Navbar = () => {

const [menu, setMenu] = useState("shop")
const {getTotalCartItems} = useContext(ShopContext)
const menuRef = useRef()

const dropdown_toggle = (e)=>{
      menuRef.current.classList.toggle('nav-manu-visible')
      e.target.classList.toggle('open')
}

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>MobHub</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Apple</Link>{menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Samsung</Link>{menu==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Vivo</Link>{menu==="kids"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Xiaomi</Link>{menu==="kids"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Compare</Link>{menu==="kids"?<hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      : <Link to='/login'>
    <div
      aria-label="User Login Button"
      tabIndex="0"
      role="button"
      className="user-profile"
    >
      <div className="user-profile-inner">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2" id="Layer_2">
            <path
              d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"
            ></path>
          </g>
        </svg>
        <p>Log In</p>
      </div>
    </div>
  </Link>
}
     
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
