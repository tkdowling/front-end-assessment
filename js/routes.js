angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'veiws/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'veiws/about.html' 
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'veiws/blog.html'
		})
		.state('shop', {
			url: '/shop',
			templateUrl: 'veiws/shop.html'
		})
	

})