angular.module('app')

    .factory('Contacts', ['$http',  function($http) {

        var urlBase = '/json/users.json',
            Contacts = {};

        Contacts.get = function() {
            return $http.get(urlBase);
        };

        return Contacts;

    }]);
