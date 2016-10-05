'use strict';
let expect = require('chai').expect;
let loader = require('../index');

describe('auto amd id', () => {
	let moduleWithoutId = 'define("name", ["dependency1", "dependency2"], function(dep1, dep2) { console.log(module); }';
	let filename = 'dir1/dir2/dir3/file.js';
	let context = {resourcePath: filename};

	it('adds modules name to files that uses module', () => {
		let result = loader.call(context, moduleWithoutId);
		let expected = `module.id = "${filename}"; ${moduleWithoutId}`;

		expect(result).to.be.equal(expected);
	});

	it('does not add module name if module is not used', () => {
		let fileWithoutModule = 'define("name", ["dep1"], function(dep1) {};';
		let result = loader.call(context, fileWithoutModule);

		expect(result).to.be.equal(fileWithoutModule);
	});
});
