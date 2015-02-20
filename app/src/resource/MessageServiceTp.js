angular.module('app.resource.message.tp', []).provider('Message', function(){

    this.config = {
        uri : null,
        auth: {
            username : null,
            password : null
        }
    };

    this.$get = function($q){

        var findAll = function(){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        var save = function(message){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        var findAllByCommunication = function(communicators){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        var findAllCommunicators = function(){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        return {
            findAll: findAll,
            save: save,
            findAllByCommunication: findAllByCommunication,
            findAllCommunicators: findAllCommunicators
        }
    };

});