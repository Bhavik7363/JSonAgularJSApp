
var app=angular.module("appModule",[]).config(function($routeProvider)
{
	$routeProvider
	.when('/search',{templateUrl:'partials/searchList.html', controller:searchcontroller})
	.otherwise({redirectTo:'/search'})});