import background from "../assets/background.jpg"
// import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    return (
        <>

        <div className="title">
                <h1>Elizabeth Tucker</h1>
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