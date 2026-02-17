const { parsers } = require('prettier/parser-babel');
const babelParser = require('@babel/parser');
const { extractImportDeclaration, getSourceByImportDeclaration } = require('./astTools');
const { ImportDeclarationsCollector } = require('./sorter');
const config = require('./config');
const generate = require('@babel/generator').default;
const cloneDeep = require('lodash/cloneDeep');

const sortImportsPlugin = (code, options) => {
	try {
		const ast = babelParser.parse(code, {
			sourceType: 'module',
			plugins: ['jsx', 'typescript'],
		});

		const importDeclarations = extractImportDeclaration(ast);

		if (importDeclarations.length === 0) {
			return code;
		}

		delete importDeclarations[importDeclarations.length - 1].trailingComments;

		// const importDeclarationsStr = JSON.stringify(importDeclarations, null, '\t');

		const importDeclarationsCollector = new ImportDeclarationsCollector(cloneDeep(config));

		for (const importDeclaration of importDeclarations) {
			const clone = cloneDeep(importDeclaration);
			clone.leadingComments = null;
			importDeclarationsCollector.collect(
				generate(clone).code,
				getSourceByImportDeclaration(clone),
			);
		}

		const sortedImports = importDeclarationsCollector.sort('');

		const newImportsCode = sortedImports.join('\n');

		const originalImportsCode = code.substring(
			importDeclarations[0].start,
			importDeclarations[importDeclarations.length - 1].end,
		);

		return code.replace(originalImportsCode, newImportsCode);
	} catch (err) {
		console.error(err);
		throw err;
	}
};

module.exports = {
	parsers: {
		typescript: {
			...parsers['babel-ts'],
			preprocess: sortImportsPlugin,
		},
		'babel-ts': {
			...parsers['babel-ts'],
			preprocess: sortImportsPlugin,
		},
		babel: {
			...parsers.babel,
			preprocess: sortImportsPlugin,
		},
	},
};
