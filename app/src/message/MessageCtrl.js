angular.module('app').controller('MessageCtrl', function ($rootScope, $scope, Message, $timeout, $stateParams, $location, $anchorScroll) {

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

    Message.findAllByCommunication([$rootScope.user.avatar, $stateParams.avatar]).then(function(messages){
        $scope.messages = messages;
        $scope.loaded = true;
        scrollToWhat();
    });

    $scope.createMessage = function(){
        $scope.waiting = true;
        $scope.message.when = (new Date()).getTime();
        Message.save(angular.copy($scope.message)).then(function(message){
            $scope.messages.push(message);
            $scope.waiting = false;
            scrollToWhat();
        });
        $scope.message.what = '';
    };

});