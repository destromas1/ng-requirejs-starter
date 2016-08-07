'use strict';


define(
[ 'angular',
  'ui.router',
  'angular-animate',
  'app/js/dashboard-controller',
  'app/js/profile-controller',
  'app/js/contact-controller'
],
function (angular) {
    
    var testApp = angular.module('testApp', ['ui.router', 'ngAnimate'])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                console.log('testApp app running...');
            }]);
              
    testApp.config(function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $provide) {
  
        
        $urlRouterProvider.otherwise("/home");
            
        $stateProvider.state('home', {
            abstract: false,
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
    
        $stateProvider.state('app', {
            abstract: true,
            url: '/',
            template: '<ui-view class="view-animation"/> '
        })
            .state('app.url', {
                url: ':url',
                controllerProvider: function ($stateParams) {
                    return $stateParams.url + "Ctrl";
                },
                templateUrl: function ($stateParams) {
                    return "partials/" + $stateParams.url + ".html";
                },
                params: { 'data': undefined }
            });

    });
    testApp.controller('homeCtrl', ['$scope', '$state', function ($scope, $state) {
        console.log('homeCtrl is running...');

        $scope.redirectRoute = function (routeName) {
            //alert(routeName);
            $state.go('app.url', { url: routeName });
        };

    }]);       
        
    return testApp;
    
});

