class ImportOrder {
	test;
	priority;

	constructor(priority, test) {
		if (typeof priority !== 'number') {
			throw new TypeError('ImportOrder: Priority must be a number');
		}
		if (typeof test !== 'function') {
			throw new TypeError('ImportOrder: Test must be a function');
		}
		this.priority = priority;
		this.test = test;
	}
}

class Slot {
	importOrder;
	collectedImportDeclarations = [];

	constructor(importOrder) {
		this.importOrder = importOrder;
	}
}

class GroupBuilder {
	group;
	constructor(group) {
		this.group = group;
	}

	addCase(priority, test) {
		this.group.push(new Slot(new ImportOrder(priority, test)));
		return this;
	}
}

module.exports = class ConfigBuilder {
	groups = [];

	addGroup(gb) {
		const newGroup = [];
		this.groups.push(newGroup);

		gb(new GroupBuilder(newGroup));
		return this;
	}
};
