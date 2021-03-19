import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "./Ecom+.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
           <Link to="/">
                <img 
                className="header_logo"
                src={logo}
                alt=""
                />
           </Link> 


            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div> 
            
            <div className="header_nav">
                <Link className="header_link" to="/login">
                    <div className="header_option">
                        <span>Sign in</span>
                    </div>
                </Link>

                <Link className="header_link" to="/">
                    <div className="header_option">
                        <span>Orders</span>
                    </div>
                </Link>
            </div>
            
            <Link className="header_link" to="/checkout">
                <div className="header_cartLink">
                    <ShoppingCartIcon />
                    <span>0</span>
                
                </div>
            </Link>
        </nav>
        
        

    );
}

export default Header;
