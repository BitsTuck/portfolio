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
                    <p>
                        Developer
                    </p>

                </div>
            </nav>
        </>
    )
}

export default Header;