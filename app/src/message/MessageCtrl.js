angular.module('app').controller('MessageCtrl', function ($rootScope, $scope, $remoteMessageService, $timeout, $stateParams, $location, $anchorScroll) {

    var scrollToWhat = function(){
        $timeout(function(){
            $location.hash('what');
            $anchorScroll();
        }, 200);
    };

    $scope.message = {
        from: $rootScope.user.avatar,
        to: $stateParams.avatar,
        who: $rootScope.user.who,
        when: (new Date()).getTime(),
        what: ''
    };

    /**
    function(doc, _emit) {
        var _me = 'svg-1';
        var _with = 'svg-2';
        if(doc.from === _me && doc.to === _with || doc.from === _with && doc.to === _me){
            emit(doc._id, doc);
        }
    }*/

    var communicationKeys = [$rootScope.user.avatar, $stateParams.avatar].sort();

    $remoteMessageService.query(function(doc) {
        var communicationKeys = [doc.from, doc.to].sort();
        emit(communicationKeys, doc);
    }, {
        startkey: communicationKeys,
        endkey:communicationKeys
    }).then(function(messages){
        $scope.messages = messages;
        scrollToWhat();
    });

    $scope.createMessage = function(){
        $scope.message.when = (new Date()).getTime();
        $remoteMessageService.save(angular.copy($scope.message)).then(function(message){
            $scope.messages.push(message);
            scrollToWhat();
        });
        $scope.message.what = '';
    };

});