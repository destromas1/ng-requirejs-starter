'use strict';

require([
	'app/js/app',
	'app/js/person-service'
], function (app) {

	var contactCtrl = function ($scope , $state, $stateParams) {

    console.log('contactCtrl is running...');

};

  app.register.controller('contactCtrl', ['$scope','$state','$stateParams', contactCtrl]);    

});
