angular.module('app', [
    'ngMaterial',
    'ui.router',
    'app.resource.message',
    'avatars'
]).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $remoteMessageServiceProvider) {

    $remoteMessageServiceProvider.uri = 'http://coding-dojo-couchdb.iriscouch.com/message';

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
angular.module('app.resource.message', []).provider('$remoteMessageService', function(){

    this.uri = 'http://xxxxxxxxxxxxxxx/api/message';

    this.$get = function($q){

        var db = new PouchDB(this.uri);

        var query = function(){
            var deferred = $q.defer();
            db.allDocs({include_docs: true, descending: true}, function(err, doc) {
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(doc.rows.map(function(row){
                        return row.doc;
                    }));
                }
            });
            return deferred.promise;
        };
        var get = function(){
            throw 'Not implemented';
        };
        var save = function(message){
            var deferred = $q.defer();
            db.post(message, function (err, response) {
                if(err){
                    deferred.reject(err);
                }else{
                    angular.extend(message, response);
                    deferred.resolve(message);
                }
            });
            return deferred.promise;
        };
        var update = function(){
            throw 'Not implemented';
        };
        var remove = function(){
            throw 'Not implemented';
        };

        return {
            query: query,
            get: get,
            save: save,
            update: update,
            remove: remove
        }
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
angular.module('app').controller('HomeCtrl', function ($scope, $remoteMessageService) {

    $remoteMessageService.query().then(function(messages){
        $scope.messages = messages;
    });

});
angular.module('app').controller('MessageCtrl', function ($rootScope, $scope, $remoteMessageService, $timeout, $stateParams, $location, $anchorScroll) {

    var scrollToWhat = function(){
        $timeout(function(){
            $location.hash('what');
            $anchorScroll();
        }, 200);
    };

    $scope.message = {
        from: $rootScope.user.avatar,
        to: $stateParams.avatar,
        who: $rootScope.user.who,
        when: (new Date()).getTime(),
        what: ''
    };

    $remoteMessageService.query().then(function(messages){
        $scope.messages = messages;
        scrollToWhat();
    });

    $scope.createMessage = function(){
        $scope.message.when = (new Date()).getTime();
        $remoteMessageService.save(angular.copy($scope.message)).then(function(message){
            $scope.messages.push(message);
            scrollToWhat();
        });
        $scope.message.what = '';
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
            who: 'Lia Lugo',
            avatar: 'svg-1'
        },
        {
            who: 'George Duke',
            avatar: 'svg-2'
        },
        {
            who: 'Gener Delosreyes',
            avatar: 'svg-3'
        },
        {
            who: 'Lawrence Ray',
            avatar: 'svg-4'
        },
        {
            who: 'Ernesto Urbina',
            avatar: 'svg-5'
        },
        {
            who: 'Gani Ferrer',
            avatar: 'svg-6'
        }
    ];

    // Promise-based API
    return {
        auth: function(){
            return $q.when(avatars[Math.floor(Math.random()*avatars.length)]);
        },
        loadAll : function() {
            return $q.when(avatars);
        }
    };
});