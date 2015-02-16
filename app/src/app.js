angular.module('app', [
    'ngMaterial',
    'ui.router',
    'avatars',
    'messages'
]).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('purple');

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                toolbar: {
                    templateUrl: 'src/toolbar/view.html',
                    controller: 'ToolbarCtrl'
                },
                sidenav: {
                    templateUrl: 'src/sidenav/view.html',
                    controller: 'SidenavCtrl'
                },
                content: {
                    templateUrl: 'src/message/view.html',
                    controller: 'MessageCtrl'
                }
            }
        });

}).run(function($rootScope, $mdBottomSheet){

    $rootScope.showActions   = function showActions($event) {
        $mdBottomSheet.show({
            templateUrl: 'src/bottom-sheet/view.html',
            controller: 'BottomSheetCtrl',
            targetEvent: $event
        });
    };

});