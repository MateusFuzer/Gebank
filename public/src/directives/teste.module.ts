(function () {
   'use strict';


   var myApp = angular.module('loja', ['ui.router']);

   myApp.config(function($stateProvider: any) {
     var helloState = {
       name: 'hello',
       url: '/',
       templateUrl: 'directives/loja.html'
     }
   
     var aboutState = {
       name: 'about',
       url: '/about',
       template: '<h3>Its the UI-Router hello world app!</h3>'
     }
   
     $stateProvider.state(helloState);
     $stateProvider.state(aboutState);
   });

   myApp.controller('teste', function($scope: any){
      $scope.teste = "pop,ihnuyn"
   })

})();