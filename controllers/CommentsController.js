hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.link = UtilitiesFactory.findById(LinksFactory.links, $stateParams.linkId)
  $scope.addComment = function() {
    $scope.link.comments.push({ comment: $scope.comment});
    $scope.comment = null;
  }
});
