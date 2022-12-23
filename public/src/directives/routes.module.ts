(function () {
    'use strict';
    angular.module('loja').config(function ($urlRouterProvider: any) {
            $urlRouterProvider.otherwise('/')
    });
})();