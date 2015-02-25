hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [];
  factory.addLink = function() {
    factory.links.push({ title: factory.linkTitle, url: factory.linkUrl, id: factory.links.length + 1, comments: [] });
    factory.linkTitle = null;
    factory.linkUrl = null;
  };
  return factory;
})
