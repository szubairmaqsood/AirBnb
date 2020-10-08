import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">

            <div className="header__left">
            <img className="header__left__icon"  src="https://i.pinimg.com/originals/3e/bc/89/3ebc89385f468948b821a4dd3436a2e1.png" alt="AirBnbLogo"></img>
            </div>

            <div className="header__center">
                <input type="text"/>
                < SearchIcon></SearchIcon>
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon></LanguageIcon>
                <ExpandMoreIcon></ExpandMoreIcon>
                <Avatar></Avatar>
            </div>
        
        </div>
    )
}

export default Header
