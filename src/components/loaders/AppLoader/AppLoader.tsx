import React, { FC, useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

import classes from './appLoader.module.scss';

const FADE_OUT_DURATION = 600;

interface TAppLoaderProps {}

const AppLoader: FC<TAppLoaderProps> = props => {
	const {} = props;

	const { progress } = useProgress();
	const [visible, setVisible] = useState(true);
	const [fadingOut, setFadingOut] = useState(false);

	useEffect(() => {
		if (progress < 100) return;

		setFadingOut(true);
		const timeout = setTimeout(() => setVisible(false), FADE_OUT_DURATION);
		return () => clearTimeout(timeout);
	}, [progress]);

	console.log('progress', progress);

	if (!visible) return null;

	return (
		<div className={`${classes.overlay} ${fadingOut ? classes.fadeOut : ''}`}>
			<div className={classes.content}>
				<span className={classes.progress}>{Math.round(progress)}%</span>
			</div>
		</div>
	);
};

export default AppLoader;
