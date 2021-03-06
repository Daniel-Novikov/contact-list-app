angular.module('app')

.factory('Contacts', ['$http', function($http) {

    var urlBase = 'https://api.myjson.com/bins/470kw', // 'http://jsonplaceholder.typicode.com/users',
        Contacts = {};

    Contacts.get = function() {
        return $http.get(urlBase);
    };

    return Contacts;

}]);

angular.module('app')

.factory('Heroes', ['$http', function($http) {

    var urlBase = 'https://api.myjson.com/bins/27n4w', //'https://api.myjson.com/bins/27n4w',
        Heroes = {};

    Heroes.get = function() {
        return $http.get(urlBase);
    };

    return Heroes;

}]);
