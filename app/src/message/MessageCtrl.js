angular.module('app').controller('MessageCtrl', function ($scope, MessageService) {

    MessageService.loadAll().then(function(messages){
        $scope.messages = messages;
    });

});