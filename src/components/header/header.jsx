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
				<img src="img/basket.svg" alt="" />
				<p>1205 руб.</p>
			</li>
			<li>
				<img src="img/hearth.svg" alt="" />
			</li>
			<li>
				<img src="img/User.svg" alt="" />
			</li>
		</ul>
	</div>
}