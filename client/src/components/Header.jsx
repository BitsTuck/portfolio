import background from "../assets/background.jpg"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    return (
        <>
        <div className="banner-div">
            <img className="banner" src={background} alt={"Elizabeth Tucker"} />
        </div>
        </>
    )
}

export default Header;