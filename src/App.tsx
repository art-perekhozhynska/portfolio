import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

import HomeLocationLayout from './components/HomeLocationLayout/HomeLocationLayout';
import HeroScreen from './components/HeroScreen/HeroScreen';
import AppLoader from './components/loaders/AppLoader/AppLoader';

import './App.scss';

const App = () => {
	const { progress } = useProgress();

	console.log('progress', progress);

	useEffect(() => {
		const vh = window.innerHeight / 100;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	return (
		<>
			<AppLoader />
			<HeroScreen animationStart={progress === 100} />
			<HomeLocationLayout />
		</>
	);
};

export default App;
