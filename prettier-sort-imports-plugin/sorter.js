class ImportDeclarationsCollector {
	slots;

	flatSortedSlots;

	unestablishedImportDeclarations = [];

	constructor(config) {
		this.slots = config;

		this.flatSortedSlots = this.slots
			.flat(Infinity)
			.sort((a, b) => b.importOrder.priority - a.importOrder.priority);
	}

	collect = (importDeclaration, source) => {
		for (const slot of this.flatSortedSlots) {
			if (slot.importOrder.test(source)) {
				slot.collectedImportDeclarations.push(importDeclaration);
				return;
			}
		}

		this.unestablishedImportDeclarations.push(importDeclaration);
	};

	sort = gap => {
		const result = [];
		let needSeparate = false;

		for (const group of this.slots) {
			if (needSeparate) {
				if (gap !== null) {
					result.push(gap);
				}
				needSeparate = false;
			}

			for (const slot of group) {
				if (slot.collectedImportDeclarations.length !== 0) {
					for (const importDeclaration of slot.collectedImportDeclarations) {
						result.push(importDeclaration);
					}
					needSeparate = true;
				}
			}
		}

		if (this.unestablishedImportDeclarations.length !== 0) {
			if (needSeparate && gap !== null) {
				result.push(gap);
			}

			for (const importDeclaration of this.unestablishedImportDeclarations) {
				result.push(importDeclaration);
			}
		}

		return result;
	};
}

module.exports = {
	ImportDeclarationsCollector,
};
