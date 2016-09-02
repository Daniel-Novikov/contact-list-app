angular.module('app')

.controller('contactListCtrl', ['$timeout', '$scope', 'Contacts', '$stateParams', '$state', function($timeout, $scope, Contacts, $stateParams, $state) {
    $scope.title = "Contact list";
    $scope.loading = true;


    /*
    * Getting json file\
    * Added timeout because list loaded too quick
    */
    var timeout = 750;

    $timeout(function() {
        Contacts.get().then(
            function(response) {
                $scope.users = response.data;
            }
        ).finally(
            function() {
                $scope.loading = false;
            }
        );
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
            angular.lowercase(user.phone).indexOf(angular.lowercase($scope.query) || '') !== -1

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
