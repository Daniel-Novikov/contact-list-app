angular.module('app.directives.resolveLoader', [])

.directive('resolveLoader', function($rootScope, $timeout) {

    return {
        restrict: 'E',
        replace: true,
        template: '<div class="alert alert-success ng-hide"><strong>Welcome!</strong> Content is loading, please hold.</div>',
        link: function(scope, element) {
            var delay = 2000;
            var timer;

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                element.removeClass('ng-hide');
                console.log(element);
                $timeout(function() {
                    if (toState.resolve) {
                        element.addClass('ng-hide');
                    }

                }, delay, false);

            });

            $rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams) {

            });
        }
    };
});
