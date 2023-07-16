import React, { useState, useEffect } from "react";
import HeaderPic from '../assets/images/headerpic.jpg'
import "./Header.css"
import "./AdditionalsPatterns.css"


const Header = () => {

    return (
        <div className="header">
            <div className="header-image">
                <img src={HeaderPic} />
            </div>
            <div className="header-text">
                <span className='header-title1'>Korepetycje z</span>
                <span className='header-title2'>Matematyki</span>
                <span className='header-title3'>Przeprowadzamy zdalne korepetycje z matematyki.</span>
            </div>
        </div>
    )
}

export default Header