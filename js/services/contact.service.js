angular.module('app')

.factory('Contacts', ['$http', function($http) {

    var urlBase = 'http://jsonplaceholder.typicode.com/users', //'/json/users.json',
        Contacts = {};

    Contacts.get = function() {
        return $http.get(urlBase);
    };

    return Contacts;

}]);

angular.module('app')

.factory('Heroes', ['$http', function($http) {

    var urlBase = 'https://api.myjson.com/bins/27n4w', //'/json/heroes.json',
        Heroes = {};

    Heroes.get = function() {
        return $http.get(urlBase);
    };

    return Heroes;

}]);
