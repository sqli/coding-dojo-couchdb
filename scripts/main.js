angular.module('app', [
    'ngMaterial',
    'ui.router',
    'avatars',
    'messages'
]).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('purple');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
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
                    templateUrl: 'src/home/view.html',
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

}).run(function($rootScope, $mdBottomSheet){

    $rootScope.showActions   = function showActions($event) {
        $mdBottomSheet.show({
            templateUrl: 'src/bottom-sheet/view.html',
            controller: 'BottomSheetCtrl',
            targetEvent: $event
        });
    };

    $rootScope.user = {
        avatar : 'svg-3',
        who: 'Gener Delosreyes'
    };

});
angular.module('app').controller('ToolbarCtrl', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

});
angular.module('app').controller('SidenavCtrl', function ($scope, $state, $stateParams, $mdSidenav, AvatarService) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.searchedFriend = '';
    $scope.selected = null;

    AvatarService.loadAll().then(function(users) {
        $scope.users = users;
    });

    $scope.selectUser = function (user) {
        $stateParams.avatar = user.avatar;
        $state.go('message', $stateParams);
        $scope.toggleSidenav('left');
    };

    $scope.isSelected = function(user){
        return user.avatar === $stateParams.avatar;
    };

});
angular.module('app').controller('HomeCtrl', function () {


});
angular.module('app').controller('MessageCtrl', function ($rootScope, $scope, MessageService, $timeout, $stateParams, $location, $anchorScroll) {

    var scrollToWhat = function(){
        $timeout(function(){
            $location.hash('what');
            $anchorScroll();
        }, 200);
    };

    $scope.message = {
        avatar: $rootScope.user.avatar,
        who: $rootScope.user.who,
        what: ''
    };

    MessageService.loadAll().then(function(messages){
        $scope.messages = messages;
        scrollToWhat();
    });

    $scope.createMessage = function(){
        $scope.message.when = (new Date()).getTime();
        $scope.messages.push(angular.copy($scope.message));
        $scope.message.what = '';
        scrollToWhat();
    };

});
angular.module('app').controller('BottomSheetCtrl', function($scope, $mdBottomSheet, $mdToast) {
    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdToast.show(
            $mdToast.simple()
                .content(clickedItem.name + ' is not implemented!')
                .position("bottom right")
                .hideDelay(3000)
        );
        $mdBottomSheet.hide(clickedItem);
    };
});
'use strict';

angular.module('avatars', []).service('AvatarService', function ($q){
    var avatars = [
        {
            name: 'Lia Lugo',
            avatar: 'svg-1'
        },
        {
            name: 'George Duke',
            avatar: 'svg-2'
        },
        {
            name: 'Gener Delosreyes',
            avatar: 'svg-3'
        },
        {
            name: 'Lawrence Ray',
            avatar: 'svg-4'
        },
        {
            name: 'Ernesto Urbina',
            avatar: 'svg-5'
        },
        {
            name: 'Gani Ferrer',
            avatar: 'svg-6'
        }
    ];

    // Promise-based API
    return {
        loadAll : function() {
            return $q.when(avatars);
        }
    };
});
'use strict';

angular.module('messages', []).service('MessageService', function ($q){
    var messages = [
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1410126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1411126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1412126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1413126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1414126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1415126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1416126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1417126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1418126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1419126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1420126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1421126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1422126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1423126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1424126352000,
            what: " I'll be in your neighborhood doing errands"
        }
    ];

    // Promise-based API
    return {
        loadAll : function() {
            return $q.when(messages);
        }
    };
});