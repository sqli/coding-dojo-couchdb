angular.module('app').controller('BottomSheetCtrl', function($scope, $mdBottomSheet, $mdToast) {
    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdToast.show(
            $mdToast.simple()
                .content(clickedItem.name + ' is not implemented!')
                .position("bottom right")
                .hideDelay(3000)
        );
        $mdBottomSheet.hide(clickedItem);
    };
});