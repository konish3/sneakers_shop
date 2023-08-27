import React from 'react';
import { Header } from './components/header/header'; 
import './App.scss';
import { Home } from './components/main/home/home';

export function App() {
	return <div className='wrapper'>
		<Header />
		<main className='main'>
			<h1 className='main__title'>Все кроссовки</h1>
			<div className='main__home'>
				<Home />
			</div>
		</main>
	</div>;
}
