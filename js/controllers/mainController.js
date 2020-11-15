app.controller("MainController", ['$scope', function($scope) {
  $scope.todo = {
    list: ["Learn AngularJS", "Play PS4", "Watch Sopranos."],
  }

  $scope.courses = {
    list: ["Angular", "PHP", "React"],
  };

  $scope.addItem = function(subject, item) {
    subject.push(item);
  }
}]);