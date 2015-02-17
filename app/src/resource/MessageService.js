angular.module('app.resource.message', []).provider('$remoteMessageService', function(){

    this.uri = 'http://xxxxxxxxxxxxxxx/api/message';

    this.$get = function($q){

        var db = new PouchDB(this.uri);

        var query = function(){
            var deferred = $q.defer();
            db.allDocs({include_docs: true, descending: true}, function(err, doc) {
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(doc.rows.map(function(row){
                        return row.doc;
                    }));
                }
            });
            return deferred.promise;
        };
        var get = function(){
            throw 'Not implemented';
        };
        var save = function(message){
            var deferred = $q.defer();
            db.post(message, function (err, response) {
                if(err){
                    deferred.reject(err);
                }else{
                    angular.extend(message, response);
                    deferred.resolve(message);
                }
            });
            return deferred.promise;
        };
        var update = function(){
            throw 'Not implemented';
        };
        var remove = function(){
            throw 'Not implemented';
        };

        return {
            query: query,
            get: get,
            save: save,
            update: update,
            remove: remove
        }
    };

});