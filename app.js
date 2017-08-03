


var app = angular.module('reddit', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
$routeProvider
	.when('/main', {
		templateUrl: 'main/main.html',
		controller: 'MainCtrl'
	})
	.when('/favorites', {
		templateUrl: 'favorites/favorites.html',
		controller: 'FavCtrl'
	})
	.otherwise({
		redirectTo: '/main'
	});

	$locationProvider.hashPrefix("");
});

































