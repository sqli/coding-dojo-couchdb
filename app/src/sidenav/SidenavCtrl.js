angular.module('app').controller('SidenavCtrl', function ($scope, $state, $stateParams, $mdSidenav, AvatarService) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.searchedFriend = '';
    $scope.selected = null;

    AvatarService.loadAll().then(function(users) {
        $scope.users = users;
    });

    $scope.selectUser = function (user) {
        $stateParams.avatar = user.avatar;
        $state.go('message', $stateParams);
        $scope.toggleSidenav('left');
    };

    $scope.isSelected = function(user){
        return user.avatar === $stateParams.avatar;
    };

});