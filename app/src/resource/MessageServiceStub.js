angular.module('app.resource.message.stub', [
    'ngResource'
]).provider('Message', function(){

    this.config = {
        uri : null,
        auth: {
            username : null,
            password : null
        }
    };

    this.$get = function($q, $resource){

        var findAll = function(){
            return $resource('stub/GET-message.json').query().$promise;
        };

        var save = function(message){
            return $q.when(message);
        };

        var findAllByCommunication = function(communicators){
            return $resource('stub/GET-message-by-communication.json').query().$promise;
        };

        var findAllCommunicators = function(){
            return $resource('stub/GET-communicators.json').query().$promise;
        };

        var findMyRelations = function(){
            return $resource('stub/GET-relations.json').query().$promise;
        };

        return {
            findAll: findAll,
            save: save,
            findAllByCommunication: findAllByCommunication,
            findAllCommunicators: findAllCommunicators,
            findMyRelations: findMyRelations
        }
    };

});