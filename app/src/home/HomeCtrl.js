angular.module('app').controller('HomeCtrl', function ($scope, Message) {

    Message.findAll().then(function(messages){
        $scope.messages = messages;
        $scope.loaded = true;
    });

});