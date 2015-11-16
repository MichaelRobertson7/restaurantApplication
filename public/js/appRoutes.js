angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/menu', {
			templateUrl: 'views/menu.html',
			controller: 'MenuController'	
		})

		.when('/floorplan', {
			templateUrl: 'views/floorPlan.html',
			controller: 'FloorPlanController'	
		});

	$locationProvider.html5Mode(true);

}]);