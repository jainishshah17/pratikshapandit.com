/**
 * Created by jainishshah on 8/8/15.
 */
/**
 * Created by jainishshah on 8/8/15.
 */
'use strict';

angular.module('myApp.performances', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/performances', {
            templateUrl: 'view/performances.html',
            controller: 'performancesCtrl'
        });
    }])
    .controller('performancesCtrl', [function($scope,$http) {


    }]);