 import {React }from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Link } from "react-router-dom";
import { useStateValue } from "./DataLayer/stateProvider";

const Header = () => {

 const [{basket}] = useStateValue(  );
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png"
          alt=" "
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header-optionLocation">
            <AddLocationAltIcon></AddLocationAltIcon>Add Location
          </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne"> Hello</span>
          <span className="header_optionLineTwo">SignIn </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne"> Returns</span>
          <span className="header_optionLineTwo"> &Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLineTwo">Prime </span>
        </div>
        <Link to="/Checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
           <span className="header_optionTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
