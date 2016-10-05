'use strict';
let expect = require('chai').expect;
let loader = require('../index');

describe('auto amd id', () => {
	let moduleWithoutId = 'define("name", ["dependency1", "dependency2"], function(dep1, dep2) {}';
	let filename = 'dir1/dir2/dir3/file.js';

	it('parses files with plugins', () => {
		let context = {resourcePath: filename};
		let result = loader.call(context, moduleWithoutId);
		let expected = `module.id = "${filename}"; ${moduleWithoutId}`;

		expect(result).to.be.equal(expected);
	});
});
