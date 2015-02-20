angular.module('app').controller('SidenavCtrl', function ($scope, $state, $stateParams, $mdSidenav, Message) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.searchedFriend = '';
    $scope.selected = null;

    Message.findAllCommunicators().then(function(users){
        $scope.users = users;
        $scope.loaded = true;
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