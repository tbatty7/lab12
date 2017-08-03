
var app = angular.module('reddit'); // This links to the other module in app.js, it does not create one.

app.controller('FavCtrl', function($scope, $timeout, RedditFactory){

	RedditFactory.getPosts()
		.then(function(result){
			// console.log(result, 'THIS IS FROM THE FAV CONTROLLER');
			$timeout($scope.favorites = result.filter(function(item){
				return item.favorite; // This works because only the ones checked have a value of true
				// and only ones with a value of true count as having the property of favorites.
			})); //$timeout is needed because html was rendering before data was processed.
		})
		.catch(function(error){
			$scope.error = 'There was an error getting posts.';
		});

});

