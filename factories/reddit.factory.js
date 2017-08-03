var app = angular.module('reddit');

app.factory('RedditFactory', function($http){
	var postData;

	return {
		getPosts: getPosts

	};

	function getPosts(){
		if (postData){
			//if we already have data return this.
			return Promise.resolve(postData); // Promise.resolve is a keyword that turns any data into a
			// promise value.
		}
	//if we don't have data, use http service to get data from reddit.
		return $http.get('https://www.reddit.com/r/aww/.json')
		.then(function(result){
			console.log(result);
			postData = result.data.data.children;
			return postData;
		});
	
	}
});