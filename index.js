const hasModule = (content) => content.indexOf('module') >= 0;

module.exports = function (content) {
  if (!hasModule(content)) return content;

  return `module.id = "${this.resourcePath}"; ${content}`;
};

