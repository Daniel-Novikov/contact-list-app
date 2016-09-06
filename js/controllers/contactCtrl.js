angular.module('app')

.controller('contactCtrl', ['$filter', '$scope', 'Contacts', 'Heroes', '$stateParams', '$state', function($filter, $scope, Contacts, Heroes, $stateParams, $state) {
    var userId = parseInt($stateParams.userId);
    $scope.title = "Contact information";

    Contacts.get().then(function(response) {
        var user = $filter('filter')(response.data, function(user) {
            return user.id === userId;
        })[0];
        $scope.user = user;
    });

    Heroes.get().then(function(response) {
        var hero = $filter('filter')(response.data, function(hero) {
            return hero.id === userId;
        })[0];
        $scope.hero = hero;
    });

}]);
