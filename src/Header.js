import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
 import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const Header = () => {
  return (
    <div className='header'>
        <img className='header_logo' src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png" alt=" "></img>

        <div className='header_search'>
           <input className='header_searchInput' type='text' />
       <SearchIcon className="header_searchIcon"></SearchIcon>
        </div>
        <div className='header_nav'>

            <div className='header_option'>
                  <span className='header_optionLineOne'>Hello</span>
                  <span className='header-optionLocation'><AddLocationAltIcon></AddLocationAltIcon>Add Location</span>
            </div>

            <div className='header_option'>
                <span className="header_optionLineOne"> Hello</span>
                <span className="header_optionLineTwo">SignIn </span>
            </div>

            <div className='header_option'>
            <span className="header_optionLineOne"> Returns</span>
                <span className="header_optionLineTwo"> &Orders</span>
            </div>

            <div className='header_option'>
            <span className="header_optionLineOne"> Your</span>
                <span className="header_optionLineTwo">Prime </span>
            </div>

            <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                </div>
                <span className='header_optionTwo header_basketCount'>0</span>
        </div>
    </div>
  )
}


export default Header