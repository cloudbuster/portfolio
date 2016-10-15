(function(){
    'use strict';
})();

var app = angular.module('portfolioApp', []);

app.controller('mainController', ['$scope', function($scope) {
        $scope.test = 'Angular working';
}]);