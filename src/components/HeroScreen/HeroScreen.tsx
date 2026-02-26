import React, { FC } from 'react';

import classes from './heroScreen.module.scss';

import TitlePhoto from '../../assets/img/Title_photo.png';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';

interface THeroScreenProps {}

const HeroScreen: FC<THeroScreenProps> = props => {
	const {} = props;

	return (
		<div className={classes.container}>
			<div className={classes.upper_part}>
				{/*<h1>ANASTASIA</h1>*/}
				<AnimatedTitle text="ANASTASIA"/>
				<img src={TitlePhoto} alt="pic" />
			</div>
			<div className={classes.lower_part}>
				<h3>UI/UX DESIGNER &</h3><h1>2D ARTIST</h1>
			</div>
		</div>
	);
};

export default HeroScreen;
