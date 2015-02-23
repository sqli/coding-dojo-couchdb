angular.module('app').controller('ToolbarCtrl', function ($rootScope, $scope, $mdSidenav, AvatarService, $state) {

    $scope.toggleSidenav = function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    };

    $scope.userSelected = $rootScope.user;
    $scope.$watch(function(){
        return $scope.userSelected;
    }, function(val){
        if(val){
            $rootScope.user = val;
            $state.go('main');
        }
    });

    $scope.loadUsers = function() {
        var promise = AvatarService.loadAll();
        promise.then(function(avatars){
            $scope.avatars = avatars;
        });
        return promise;
    };
});