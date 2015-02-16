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