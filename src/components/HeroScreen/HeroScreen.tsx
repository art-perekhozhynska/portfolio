import React, { FC } from 'react';

import classes from './heroScreen.module.scss';

import TitlePhoto from '../../assets/img/title_photo.png';

interface THeroScreenProps {}

const HeroScreen: FC<THeroScreenProps> = props => {
	const {} = props;

	return (
		<div className={classes.container}>
			<div className={classes.typography}>
				<div className={classes.title}>
					<h1>
						ANASTASIA
					</h1>
					{/*<span>AN</span>*/}
					{/*<span>AS</span>*/}
					{/*<span>TA</span>*/}
					{/*<span>SIA</span>*/}
				</div>

				<h3>2D Artist & UI/UX designer</h3>
			</div>
			{/*<img*/}
			{/*	src={TitlePhoto}*/}
			{/*	alt="pic"*/}
			{/*/>*/}
		</div>
	);
};

export default HeroScreen;
