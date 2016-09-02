angular.module('app')

    .controller('adminCtrl', ['$scope', 'Contacts', function($scope, Contacts){
        $scope.title = "Admin";
        $scope.items= ['History1', 'History2', 'History3'];

        Contacts.get().then(function(response){
            var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
            var users = response.data;

            var out = [];
            alphabet.forEach(function (letter) {
                var users_with_letter = 0;
                var users_arr = [];

                users.forEach(function (user) {

                    if (user.username.charAt(0).toLowerCase() == letter) {
                        users_with_letter++;
                        users_arr.push(user);
                    }
                });

                //if(users_with_letter > 0){
                    out.push({
                        letter: letter,
                        count: parseInt(users_with_letter),
                        users: users_arr
                    });
                //}
            });

            $scope.mystats = out;
            console.log($scope.mystats);
        });

    }]);
