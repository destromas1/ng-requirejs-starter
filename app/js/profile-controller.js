'use strict';


require([
	'app/js/app',
	'app/js/person-service'
], function (app) {

	var profileCtrl = function ($scope, $state, $stateParams, personService) {
		console.log('profileCtrl is running...');

		$scope.dashboardName = $stateParams.data ? $stateParams.data.dashboardName : "";
	
		$scope.sortedBy = {
			firstName: false
		};

		$scope.persons = personService.getPersons();

		$scope.personsView = personService.getPersons();
	
		$scope.sortPersons = function () {

			if (!$scope.sortedBy.firstName) {
				$scope.personsView = personService.getPersons();
			} else {
				$scope.personsView = _.sortBy($scope.persons, function (obj) {
					return obj.firstName
				});
			}
		};
	};

  app.register.controller('profileCtrl', ['$scope', '$state', '$stateParams', 'personService', profileCtrl]);    

});
