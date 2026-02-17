const ConfigBuilder = require('./configBuilder');

const configBuilder = new ConfigBuilder();

configBuilder
	.addGroup(
		// Globals
		gb =>
			gb
				.addCase(0, s => s === 'react')
				.addCase(0, s => s === 'react-dom')
				.addCase(0, s => s === 'react-router')
				.addCase(0, s => s === 'react-dom')
				.addCase(-2, s => !s.startsWith('.') && !s.startsWith('~@')),
	)
	.addGroup(
		// Mui components
		gb => gb.addCase(0, s => s.startsWith('@mui')),
	)
	.addGroup(
		// Mui icons
		gb => gb.addCase(1, s => s.startsWith('@mui/icons')),
	)
	.addGroup(
		// React components
		gb =>
			gb
				.addCase(2, s => /^.\/([A-Z]\w+)\/\1$/.test(s))
				.addCase(2, s => /\/ui\/([A-Z]\w+)\/\1$/.test(s))
				.addCase(3, s => /^~@ui\/([A-Z]\w+)\/\1$/.test(s))
				.addCase(3, s => /^~@components\/([A-Z]\w+)\/\1$/.test(s))
				.addCase(-1, s => /\/[A-Z]\w+$/.test(s)),
	)
	.addGroup(
		// Svg icons
		gb =>
			gb
				.addCase(0, s => s.includes('/svgIcons/') && s.endsWith('Icon'))
				.addCase(0, s => s.startsWith('~@ui/svgIcons') && s.endsWith('Icon')),
	)
	.addGroup(
		// Functions
		gb =>
			gb
				.addCase(0, s => s.toLowerCase().includes('function'))
				.addCase(-1, s => /(?:[A-Za-z0-9]*\/)*use[A-Za-z0-9]+$/.test(s))
				.addCase(0, s => s.toLowerCase().includes('hooks'))
				.addCase(0, s => s.endsWith('renderAdvancedActionView'))
				.addCase(0, s => s.endsWith('renderAdvancedAction'))
				.addCase(0, s => s.endsWith('Queries'))
				.addCase(0, s => s.endsWith('.class'))
				.addCase(0, s => s.includes('Ducks'))
				.addCase(0, s => s.includes('Thunks'))
				.addCase(2, s => s.endsWith('/apiFetch'))
				.addCase(2, s => s.endsWith('/services/queryParams'))
				.addCase(2, s => s.endsWith('/modules/websockets')),
	)
	.addGroup(
		// React context's
		gb => gb.addCase(0, s => s.toLowerCase().includes('context')),
	)
	.addGroup(
		// Constants
		gb =>
			gb
				.addCase(0, s => s.toLowerCase().includes('constant'))
				.addCase(0, s => s.endsWith('/queryClient'))
				.addCase(0, s => s.endsWith('/serverAddress')),
	)
	.addGroup(
		// Rest
		gb => gb.addCase(-Infinity, () => true),
	)
	.addGroup(
		// Types
		gb =>
			gb.addCase(3, s => s.toLowerCase().includes('typing')).addCase(3, s => s.includes('Types')),
	)
	.addGroup(
		// Styles
		gb => gb.addCase(0, s => s.endsWith('.css')).addCase(0, s => s.endsWith('.scss')),
	)
	.addGroup(
		// Some media misc
		gb =>
			gb.addCase(
				0,
				s =>
					s.toLowerCase().includes('/assets/') ||
					s.endsWith('.png') ||
					s.endsWith('.jpg') ||
					s.endsWith('.svg') ||
					s.endsWith('.json'),
			),
	);

module.exports = configBuilder.groups;
