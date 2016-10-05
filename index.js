module.exports = function (content) {
  return `module.id = "${this.resourcePath}"; ${content}`;
};

