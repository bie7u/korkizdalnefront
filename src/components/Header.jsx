import React, { useState, useEffect } from "react";
import HeaderPic from '../assets/images/headerpic.jpg'
import "./Header.css"
import "./AdditionalsPatterns.css"


const Header = ({headerData}) => {
    const lesson_text = headerData.data.lesson_text
    const description = headerData.data.description

    return (
        <div className="header">
            <div className="header-image">
                <img src={HeaderPic} />
            </div>
            <div className="header-text">
                <span className='header-title1'>Korepetycje z</span>
                <span className='header-title2'>{lesson_text}</span>
                <span className='header-title3'>{description}</span>
            </div>
        </div>
    )
}

export default Header