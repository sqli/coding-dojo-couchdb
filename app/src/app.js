angular.module('app', [
    'ngMaterial',
    'ui.router',
    'app.resource.message.couchdb', // couchdb|stub|tp
    'avatars'
]).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, MessageProvider) {

    MessageProvider.config.uri = 'http://coding-dojo-couchdb.iriscouch.com/message';
    MessageProvider.config.login = 'coding-dojo-couchdb';
    MessageProvider.config.password = 'P@$$w0rd';

    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('purple');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            resolve: {
                connection: function(Message){
                    return Message.connect();
                }
            },
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
                    controller: 'HomeCtrl'
                }
            }
        }).state('message', {
            url: 'message/:avatar',
            parent: 'main',
            views: {
                'content@': {
                    templateUrl: 'src/message/view.html',
                    controller: 'MessageCtrl'
                }
            }
        });

}).run(function($rootScope, $mdBottomSheet, AvatarService){

    $rootScope.showActions   = function showActions($event) {
        $mdBottomSheet.show({
            templateUrl: 'src/bottom-sheet/view.html',
            controller: 'BottomSheetCtrl',
            targetEvent: $event
        });
    };

    AvatarService.auth().then(function(user){
        $rootScope.user = user;
    });

});