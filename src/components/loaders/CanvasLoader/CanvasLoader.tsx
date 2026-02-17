import React, { FC } from 'react';
import { Html } from '@react-three/drei';

interface TCanvasLoaderProps {}

const CanvasLoader: FC<TCanvasLoaderProps> = props => {
	const {} = props;

	return (
		<Html
			as="div"
			center
		>
			LOADING
		</Html>
	);
};

export default CanvasLoader;
