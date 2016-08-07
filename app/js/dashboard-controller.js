'use strict';


require([
    'angular',
    'app/js/app'
], function (angular , app) {

    var dashboardCtrl = function ($scope , $state, $stateParams) {
        console.log('dashboardCtrl is running...');

        $scope.passNameToProfile = function () {
            $state.go('app.url', { url: 'profile', data: { dashboardName: $scope.dashboardName } });
        };
        
    };

    app.register.controller('dashboardCtrl', ['$scope','$state','$stateParams', dashboardCtrl]);    

    });


