import React, { useEffect } from 'react';

import HomeLocationLayout from './components/HomeLocationLayout/HomeLocationLayout';
import HeroScreen from './components/HeroScreen/HeroScreen';

import './App.scss';

const App = () => {
	useEffect(() => {
		const vh = window.innerHeight / 100;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	return (
		<>
			<HeroScreen />
			<HomeLocationLayout />
		</>
	);
};

export default App;
