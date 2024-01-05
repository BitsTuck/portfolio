import background from "../assets/background.jpg"
// import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    return (
        <>
        <div className="banner-div">
            <img className="banner" src={background} alt={"Elizabeth Tucker"} />
        </div>
        <nav>
            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Header;