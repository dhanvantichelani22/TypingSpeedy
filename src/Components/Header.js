import React from 'react'
import { useNavigate } from "react-router-dom"
import AccountCircle from './AccountCircle';

const Header = () => {
  const navigate = useNavigate();

  const handleHome = () =>{
    navigate('/')
  }

  return (
    <div className='header'>
         <div className='logo' onClick={handleHome}>
            {/* Logo for website*/}
            <span>Speedy</span>Type
         </div>
    <div className="user-icon">
     {/* user icon visible here */}
       <AccountCircle/>
    </div>
    </div>
  )
}

export default Header