angular.module('app').controller('HomeCtrl', function ($scope, $remoteMessageService) {

    $remoteMessageService.query().then(function(messages){
        $scope.messages = messages;
    });

});