var app = angular.module('todoList', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: "views/todo.html",
  })

  .when('/courses', {
    templateUrl: 'views/courses.html'
  })

  .otherwise({ redirectTo: '/' }); 

})