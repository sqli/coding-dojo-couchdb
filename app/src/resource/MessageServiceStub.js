angular.module('app.resource.message.stub', [
    'ngResource'
]).factory('Message', function($q, $resource){

    var findAll = function(){
        return $resource('src/resource/stub/GET-message.json').query().$promise;
    };

    var save = function(message){
        return $q.when(message);
    };

    var findAllByCommunication = function(communicators){
        return $resource('src/resource/stub/GET-message-by-communication.json').query().$promise;
    };

    var findAllCommunicators = function(){
        return $resource('src/resource/stub/GET-communicators.json').query().$promise;
    };

    return {
        findAll: findAll,
        save: save,
        findAllByCommunication: findAllByCommunication,
        findAllCommunicators: findAllCommunicators
    }

});