import React from 'react';
import '../../../styles/home.scss'

export function Home () {
	return <div className='card'>
		<div className="card__img">
			<img width={133} height={112} className='card__img_sneaker' src="img/sneakers/image-1.jpg" alt="sneakers" />
			<img className='card__img_add-in-favorites' src="img/addToFavorites.svg" alt="addToFavorites" />
		</div>
		<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
		<div className="card__bottom">
			<div className="card__bottom_price">
				<p>Цена:</p>
				<p>12 999 руб.</p>
			</div>
			<div className="card__bottom_add-card"></div>
		</div>
	</div>
}