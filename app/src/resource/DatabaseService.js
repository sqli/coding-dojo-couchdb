angular.module('app.resource.message.couchdb', []).provider('DatabaseService', function(){

    this.config = {
        uri: 'http://xxx.iriscouch.com/',
        login: null,
        password: null
    };

    this.$get = function($q){

        var config = this.config;

        var connect = function(){
            var db = new PouchDB(this.uri);
            var deferred = $q.defer();
            db.login(this.login, this.password).then(function () {
                deferred.resolve();
            }, function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        };

        return {
            connect: connect
        }
    };

});