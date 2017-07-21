const hasModule = (content) => content.indexOf('module') >= 0;

module.exports = function (content) {
  this.cacheable();
  if (!hasModule(content)) return content;

  return `module.id = "${this.resourcePath.replace(process.cwd(), '').replace(/\\/g, '/')}"; ${content.replace('module.id', 'module.i')}`;
};

