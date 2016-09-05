angular.module('app')

.factory('Contacts', ['$http', function($http) {

    var urlBase = '/json/users.json',
        Contacts = {};

    Contacts.get = function() {
        return $http.get(urlBase);
    };

    return Contacts;

}]);

angular.module('app')

.factory('Heroes', ['$http', function($http) {

    var urlBase = '/json/heroes.json',
        Heroes = {};

    Heroes.get = function() {
        return $http.get(urlBase);
    };

    return Heroes;

}]);
