var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('links', {
    url: "",
    templateUrl: "partials/links.html",
    controller: 'LinksCtrl'
  });

  $stateProvider.state('links.comments', {
    url: "/:linkId",
    templateUrl: "partials/links.comments.html",
    controller: 'CommentsCtrl'
  });
});
