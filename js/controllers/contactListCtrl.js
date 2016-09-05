angular.module('app')

.controller('contactListCtrl', ['$timeout', '$scope', 'Contacts', 'Heroes', '$stateParams', '$state', function($timeout, $scope, Contacts, Heroes, $stateParams, $state) {
    $scope.title = "Contact list";
    $scope.loading = true;

    /*
    * Getting json file
    * Added timeout because list loaded too quick
    */
    var timeout = 750;
    var output = {};

    $timeout(function() {
        Contacts.get().then(function(response) {

            var users = response.data;

            Heroes.get().then(function(response2) {

                var heroes = response2.data;

                /*
                * Merging Users and Heroes arrays
                */
                users.forEach(function (user) {
                    heroes.forEach(function (hero) {
                        if (parseInt(user.id) === parseInt(hero.id)) {

                            user["hero"] = hero;
                        }
                    });
                });
                console.log(users);
                $scope.users = users;
            });

        }).finally(function() {
            $scope.loading = false;
        });
    }, timeout);


    $scope.openContact = function(id) {
        $state.go('contact', {
            'userId': id
        });
    };

    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log(1);
        if (toState.resolve) {
            console.log(1);
            $scope.showSpinner();
        }
    });


    /*
     * Basic search function
     * Using multiple values for filter function
     */
    $scope.search = function(user) {
        return (
            angular.lowercase(user.name).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(user.username).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(user.email).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(user.phone).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(user.hero.name).indexOf(angular.lowercase($scope.query) || '') !== -1
        );
    };

    /*
     * Basic sort function
     */

    $scope.propertyName = 'name';
    $scope.reverse = false;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    //console.log($scope.movieId);
}]);
