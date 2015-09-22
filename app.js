var scopeDemo = angular.module('scopeDemo', []);


// Controller
scopeDemo.controller("ScopeCtrl",
  ['$scope', function( $scope ){

    console.log("Instantiating ScopeCtrl");


    // *** NAMES ***
    $scope.names = [
      "Frodo",
      "Legolas",
      "Arigorn",
      "Gimli"
    ];

    $scope.name = "Default Name";


    // *** WIDGETS ***
    $scope.widgets = [
      { name: "first widget", id: 1 },
      { name: "second widget", id: 2 },
      { name: "third widget", id: 3 },
    ];

    $scope.widget = { name: "special widget", id: 4 };

  }]
);


// Custom Directives
scopeDemo.directive('unspecifieddir', function() {
  return {
    template: '<div>Not Isolated (Unspecified): <input type = "text" ng-model = "name" >:   {{ name }}</div>',
  };
});
scopeDemo.directive('twowaydir', function() {
  return {
    template: '<div>Isolate Two Way: <input type = "text" ng-model = "name" >:   {{ name }}</div>',
    scope: {
      name: "=",
    }
  };
});
scopeDemo.directive('inheritdir', function() {
  return {
    template: '<div>Isolate Inherited: <input type = "text" ng-model = "name" >:   {{ name }}</div>',
    scope: true,
  };
});