import React, { FC } from 'react';

import classes from './homeLocationLayout.module.scss';
import HomeLocationScene from '../3d/HomeLocation/HomeLocationScene';

interface THomeLocationLayoutProps {}

const HomeLocationLayout: FC<THomeLocationLayoutProps> = props => {
	const {} = props;

	return (
		<div className={classes.container}>
			<HomeLocationScene/>
		</div>
	);
};

export default HomeLocationLayout;
