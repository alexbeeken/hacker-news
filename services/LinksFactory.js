hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [];
  factory.addLink = function() {
    factory.links.push({
      title: factory.linkTitle,
      url: factory.linkUrl,
      id: factory.links.length + 1,
      comments: [],
      points: 0,
      dateCreated: new Date(),
      dateNow: Date.now(),
      orderPost: Date.now(),
      addVote: function() {
        this.points++;
        this.orderPost = this.dateNow + (10000);
      },
      subtractVote: function() {
        this.points--;
        this.orderPost = this.dateNow - (10000);
      }
    });
    factory.linkTitle = null;
    factory.linkUrl = null;
  };



  return factory;
})
