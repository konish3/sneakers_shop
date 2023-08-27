import React from 'react';
import '../../styles/header.scss'
import {Link} from 'react-router-dom'

export function Header () {
	return <div className="header">
		<Link to='/'>
			<div className="logo">
				<img width={40} height={40} src="img/logo.png" alt="logo" />
				<div className='header__title'>
					<h3>Cross New</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
		</Link>
		<ul className='header__list'>
			<li className='header__list_basket'>
				<Link to='/'><img src="img/basket.svg" alt="" /></Link>
				<p>1205 руб.</p>
			</li>
			<li>
				<Link to='/'><img src="img/hearth.svg" alt="" /></Link>
			</li>
			<li>
				<Link to='/'><img src="img/User.svg" alt="" /></Link>
			</li>
		</ul>
	</div>
}