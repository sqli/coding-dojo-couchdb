angular.module('app').controller('HomeCtrl', function ($rootScope, $scope, Message, MessageUtilService, AvatarService, $state) {

    $scope.goToConversation = function(avatar){
        $state.go('message', {avatar: avatar});
    };

    Message.findMyRelations($rootScope.user.avatar).then(function(users){
        $scope.tiles = MessageUtilService.toTiles(users);
        $scope.loaded = true;
    });

});