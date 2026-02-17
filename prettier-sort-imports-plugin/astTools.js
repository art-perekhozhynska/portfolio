const { default: traverse } = require('@babel/traverse');
const { isTSModuleDeclaration } = require('@babel/types');

const extractImportDeclaration = ast => {
	const importDeclarations = [];

	traverse(ast, {
		ImportDeclaration(path) {
			const tsModuleParent = path.findParent(p => isTSModuleDeclaration(p));
			if (!tsModuleParent) {
				importDeclarations.push(path.node);
			}
		},
	});

	return importDeclarations;
};

const replaceImportDeclarations = (ast, declarations) => {
	let lastPath = null;
	traverse(ast, {
		ImportDeclaration(path) {
			if (lastPath !== null) {
				lastPath.remove();
			}

			lastPath = path;
		},
	});

	if (lastPath !== null) {
		lastPath.replaceWithMultiple(declarations);
	}
};

const extractExportDeclaration = ast => {
	const exportDeclarations = [];

	traverse(ast, {
		ExportDefaultDeclaration(path) {
			exportDeclarations.push(path.node);
		},
		ExportNamedDeclaration(path) {
			exportDeclarations.push(path.node);
		},
	});

	return exportDeclarations;
};

const getSourceByImportDeclaration = importDeclaration => {
	return importDeclaration.source.value;
};

module.exports = {
	extractExportDeclaration,
	extractImportDeclaration,
	getSourceByImportDeclaration,
	replaceImportDeclarations,
};
