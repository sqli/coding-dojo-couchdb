angular.module('app').controller('ToolbarCtrl', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

});