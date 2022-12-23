(function () {
    'use strict';
    var myApp = angular.module('loja', ['ui.router']);
    myApp.config(function ($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/',
            templateUrl: 'directives/loja.html'
        };
        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        };
        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });
    myApp.controller('teste', function ($scope) {
        $scope.teste = "pop,ihnuyn";
    });
})();
(function () {
    'use strict';
    angular.module('loja').config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
})();
angular.module('loja')
    .directive('headerTeste', function () {
    return {
        restrict: 'E',
        templateUrl: '/directives/header/header.html'
    };
});
var a = 'll';
