angular.module('app').controller('HomeCtrl', function ($scope, $remoteMessageService) {

    $remoteMessageService.findAll().then(function(messages){
        $scope.messages = messages;
    });

});