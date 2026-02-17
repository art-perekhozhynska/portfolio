import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

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
