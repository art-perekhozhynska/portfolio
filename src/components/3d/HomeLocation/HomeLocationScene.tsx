import React, { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Center, OrbitControls } from '@react-three/drei';

import HomeLocation from './HomeLocation';
import CanvasLoader from '../../loaders/CanvasLoader/CanvasLoader';

import { useBreakpoints } from '../../../services/hooks';

interface THomeLocationSceneProps {}

const HomeLocationScene: FC<THomeLocationSceneProps> = props => {
	const {} = props;

	const { smScreen } = useBreakpoints();

	return (
		<Canvas
			style={{ width: '100%', height: '100%' }}
			camera={{ position: [0, 0, 0], fov: 45 }}
		>
			<Suspense fallback={<CanvasLoader />}>

				// todo add loader
				<Bounds
					fit
					margin={smScreen ? 0.8 : 0.9}
				>
					<Center>
						<HomeLocation />
					</Center>
				</Bounds>
				{/*<LightScene />*/}
				{/*{isAxesHelper && <axesHelper args={[10]} />}*/}
			</Suspense>
			<ambientLight
				intensity={6}
				color="#ffffff"
			/>
			<OrbitControls
				enablePan={false}
				enableZoom={false}
				rotateSpeed={0.8}
			/>
		</Canvas>
	);
};

export default HomeLocationScene;
