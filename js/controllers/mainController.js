app.controller("MainController", ['$scope', function($scope) {
  $scope.list = ['Learn AngularJS', "Play PS4", "Watch Sopranos."];
  $scope.addItem = function() {
    $scope.list.push($scope.addTodo);
  }
}]);