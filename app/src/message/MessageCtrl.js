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