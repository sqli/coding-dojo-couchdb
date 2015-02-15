angular.module('app').controller('AppCtrl', function ($scope, avatarsService, $mdToast, $mdDialog, $mdSidenav, $mdBottomSheet, $log ) {
    var allAvatars = [ ];

    $scope.selected      = null;
    $scope.avatars       = allAvatars;
    $scope.selectAvatar  = selectAvatar;
    $scope.toggleSidenav = toggleSideNav;
    $scope.showActions   = showActions;
    $scope.searchedFriend = '';

    loadAvatars();

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Load all available avatars
     * @param menuId
     *
     */
    function loadAvatars() {
        avatarsService
            .loadAll()
            .then( function( avatars ) {
                allAvatars = avatars;

                $scope.avatars = [].concat(avatars);
                $scope.selected = avatars[0];
            });
    }

    /**
     * Hide or Show the sideNav area
     * @param menuId
     */
    function toggleSideNav( name ) {
        $mdSidenav(name).toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectAvatar ( avatar ) {
        $scope.selected = angular.isNumber(avatar) ? $scope.avatars[avatar] : avatar;
        $scope.toggleSidenav('left');
    }

    /**
     * Show the bottom sheet
     */
    function showActions($event) {

        $mdBottomSheet.show({
            templateUrl: 'src/bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                    .content(clickedItem.name + ' is not implemented!')
                    .position("bottom right")
                    .hideDelay(3000)
            );
        });

    }

});