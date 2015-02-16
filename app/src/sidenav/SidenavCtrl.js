angular.module('app').controller('SidenavCtrl', function ($scope, $mdSidenav, AvatarService) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.searchedFriend = '';

    AvatarService.loadAll().then(function(avatars) {
        $scope.avatars = avatars;
    });

    $scope.selectAvatar = function (avatar) {
        $scope.toggleSidenav('left');
    }

});