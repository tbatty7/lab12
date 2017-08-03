
var app = angular.module('reddit'); // This links to the other module in app.js, it does not create one.

app.controller('MainCtrl', function($scope, $timeout, RedditFactory){ // $timeout is a keyword

	RedditFactory.getPosts()
		.then(function(result){
			$timeout($scope.posts = result); //This is needed because html was rendering before data was processed.
		})
		.catch(function(error){
			$scope.error = 'There was an error getting posts.';
		});

		$scope.saveFavorites = saveFavorites; // This make the function below callable in the html

		function saveFavorites (){
			console.log($scope.posts);
		}
});