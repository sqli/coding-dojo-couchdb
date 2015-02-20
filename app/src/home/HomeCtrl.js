angular.module('app').controller('HomeCtrl', function ($scope, Message, MessageUtilService) {

    Message.findAll().then(function(messages){
        $scope.messages = MessageUtilService.splitByPeriods(messages).reverse();
        $scope.loaded = true;
    });

});