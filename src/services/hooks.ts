import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { InViewHookResponse, useInView } from 'react-intersection-observer';

//

export const useCompositeClassName = (...classNames: (string | unknown)[]) =>
	useMemo(() => {
		const compositeClassNames = (...classNames: (string | unknown)[]) =>
			classNames
				.filter(className => typeof className === 'string' && className !== '')
				.join(' ');

		return compositeClassNames(...classNames);
	}, classNames);

// breakpoints

export const useBreakpoints = () => {
	const xsScreen = useMediaQuery({ maxWidth: 500 });
	const smScreen = useMediaQuery({ maxWidth: 768 });
	const mdScreen = useMediaQuery({ maxWidth: 900 });
	const lgScreen = useMediaQuery({ maxWidth: 1120 });
	const xlScreen = useMediaQuery({ maxWidth: 1920 });

	return { xsScreen, smScreen, mdScreen, lgScreen, xlScreen };
};

//

type TUseInViewportResult = [InViewHookResponse['ref'], boolean, boolean];

export const useInViewport = (): TUseInViewportResult => {
	const [wasInViewport, setWasInViewport] = useState(false);
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			setWasInViewport(true);
		}
	}, [wasInViewport || inView]);

	return [ref, wasInViewport, inView];
};

