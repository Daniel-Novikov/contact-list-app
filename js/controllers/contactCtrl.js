angular.module('app')

    .controller('contactCtrl', ['$filter', '$scope', 'Contacts', '$stateParams', '$state', function($filter, $scope, Contacts, $stateParams, $state){
        var userId = parseInt($stateParams.userId);

        Contacts.get().then(function(response){
            var user = $filter('filter')(response.data, function (user) {return user.id === userId;})[0];
            console.log(user);
            $scope.user = user;
        });

    }]);
