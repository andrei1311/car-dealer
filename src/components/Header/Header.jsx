import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Logo from '../../assets/image/logo.svg';
import SideImg from '../../assets/image/2.png';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div id="container">
            <div id="navbar">
                <ul>
                    <li><Link to="/home">Acasa</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/services">Servicii</Link></li>
                </ul>
                <div id="logo">
                    <img src={Logo} alt="" />
                </div>
                <ol>
                    <li><Link to="/cars">Masini</Link></li>
                    <li><Link to="/about">Despre noi</Link></li>
                    <li><Link to="/contact">Contacteaza-ne</Link></li>
                </ol>
            </div>
            <div id="sideimg">
                <img src={SideImg} alt="" />
            </div>
            <div id="content">
                <h2>Your best car</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequatur expedita iure cum dolorem, illo repudiandae 
                    accusantium deserunt optio nam ut vitae officia, 
                    quos aliquam? Dolorem voluptatem soluta unde nobis nostrum.
                </p>
                <button>EXPLOR</button>
            </div>
            </div>
			</div>
		)
	}
}
