angular.module('app')

.controller('adminCtrl', ['$scope', 'Contacts', '$state', function($scope, Contacts, $state) {
    $scope.title = "Admin panel";

    Contacts.get().then(function(response) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        var users = response.data;
        var out = [];

        alphabet.forEach(function(letter) {
            var users_with_letter = 0;
            var users_arr = [];

            users.forEach(function(user) {

                if (user.username.charAt(0).toLowerCase() == letter) {
                    users_with_letter++;
                    users_arr.push(user);
                }
            });

            if(users_with_letter > 0){
                out.push({
                    letter: letter,
                    count: parseInt(users_with_letter),
                    users: users_arr
                });
            }
        });

        $scope.openContact = function(id) {
            $state.go('contact', {
                'userId': id
            });
        };

        $scope.stats = out;
    });

}]);
