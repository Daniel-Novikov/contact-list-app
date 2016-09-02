angular.module('app', [
    'ui.router',
    'app.directives.resolveLoader'
])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider ){

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'templates/contact.list.html',
            controller: 'contactListCtrl'
        });

        $stateProvider.state('admin', {
            url: '/admin',
            templateUrl: 'templates/admin.html',
            controller: 'adminCtrl'
        });

        $stateProvider.state('contact', {
            url: '/contact/:userId',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        });

    }]);
