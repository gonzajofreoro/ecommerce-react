import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <a className="brand" href="/">Apple Argentina</a>
        <ul className="nav-item">
        <Link to="/">Home</Link>
        <Link to="/categorias/iphoneX">Iphone X</Link>   
        <Link to="/categorias/iphone12">Iphone 12</Link>
        <Link to="/categorias/iphone13">Iphone 13</Link> 
        <Link to="/cart"><CartWidget /></Link> 
        </ul>
        
    </nav>
    )
}

export default NavBar
