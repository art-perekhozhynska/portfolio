import React, { FC, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';


interface THomeLocationProps {}

const MODEL_URL = `/portfolio/assets/3d/this_tree_is_growing.glb`;
// const MODEL_URL = `/portfolio/assets/3d/this_tree_is_growing.glb`;

const HomeLocation: FC<THomeLocationProps> = props => {
	const {} = props;

	const rootRef = useRef<THREE.Mesh>(null!);
	const partRef = useRef<THREE.Object3D | null>(null);

	const gltf = useGLTF(MODEL_URL);
	const model = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

	partRef.current = model.getObjectByName("rocks_baked_rocks_0_$AssimpFbx$_ScalingPivot") ?? null;

	useMemo(() => {
		console.log('nodes:', Object.keys(gltf.nodes));
		console.log('materials:', Object.keys(gltf.materials));
	}, [gltf]);

	// useFrame((_, delta) => {
	// 	if (partRef.current) {
	// 		partRef.current.rotation.y += delta * 1;
	// 	}
	// });

	return (
		// <mesh
		// 	ref={rootRef}
		// 	rotation={[0.3, 2.5, -0.2]}
		// >
		// 	<primitive object={model} />
		// </mesh>
		<group
			ref={rootRef}
			rotation={[0.3, 2.5, -0.2]}
		>
			<primitive object={model} />
		</group>
	);
};

export default HomeLocation;
