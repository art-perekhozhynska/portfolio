import React, { FC, useRef } from 'react';

import { useCompositeClassName, useInViewport } from '../../services/hooks';

import classes from './AnimatedTitle.module.scss';

interface TAnimatedTitleProps {
	text: string;
	className?: string;
}

const AnimatedTitle: FC<TAnimatedTitleProps> = props => {
	const { text, className: providedClassName } = props;

	const [titleRef, isTitleInViewport] = useInViewport();
	const containerClassName = useCompositeClassName(providedClassName, classes.title);

	return (
		<h1
			ref={titleRef}
			className={containerClassName}
		>
			{text.split('').map((char, i) => {
				const animationDelay = `${i * 0.2}s`;
				return (
					<span
						className={classes.char}
						data-is-in-viewport={isTitleInViewport}
						style={{ animationDelay }}
						key={i}
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				);
			})}
		</h1>
	);
};

export default AnimatedTitle;
