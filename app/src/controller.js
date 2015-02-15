angular.module('app').controller('AppCtrl', function ($scope, avatarsService, $mdToast, $mdDialog, $mdSidenav, $mdBottomSheet, $log ) {
    var allAvatars = [ ];

    $scope.selected      = null;
    $scope.avatars       = allAvatars;
    $scope.selectAvatar  = selectAvatar;
    $scope.toggleSidenav = toggleSideNav;
    $scope.showActions   = showActions;

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
            parent: angular.element(document.getElementById('content')),
            template: '<md-bottom-sheet class="md-list md-has-header">' +
                '<md-subheader>Avatar Actions</md-subheader>' +
                '<md-list>' +
                '<md-item ng-repeat="item in vm.items">' +
                '<md-button ng-click="vm.performAction(item)">{{item.name}}</md-button>' +
                '</md-item>' +
                '</md-list>' +
                '</md-bottom-sheet>',
            bindToController : true,
            controllerAs: "vm",
            controller: [ '$mdBottomSheet', AvatarSheetController],
            targetEvent: $event
        }).then(function(clickedItem) {
            $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function AvatarSheetController( $mdBottomSheet ) {
            this.items = [
                { name: 'Share', icon: 'share' },
                { name: 'Copy', icon: 'copy' },
                { name: 'Impersonate', icon: 'impersonate' },
                { name: 'Singalong', icon: 'singalong' }
            ];
            this.performAction = function(action) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Simple Toast!')
                        .hideDelay(3000)
                );

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('This is an alert title')
                        .content('You can specify some description text in here.')
                        .ariaLabel('Password notification')
                        .ok('Got it!')
                        .targetEvent(action)
                );
                $mdBottomSheet.hide(action);
            };
        }
    }

});