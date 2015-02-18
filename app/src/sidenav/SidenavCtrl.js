angular.module('app').controller('SidenavCtrl', function ($scope, $state, $stateParams, $mdSidenav, $remoteMessageService) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.searchedFriend = '';
    $scope.selected = null;

    $remoteMessageService.query({
        map: function(doc) {
            emit(doc.from, doc.who);
            emit(doc.to);
        },
        reduce: function(key, value){
            for(var i = 0; i < value.length; i++){
                if(value[i]){
                    return value[i]
                }
            }
        }
    }).then(function(users){
        $scope.users = users;
    });

    $scope.selectUser = function (user) {
        $stateParams.avatar = user.key;
        $state.go('message', $stateParams);
        $scope.toggleSidenav('left');
    };

    $scope.isSelected = function(user){
        return user.key === $stateParams.avatar;
    };

});