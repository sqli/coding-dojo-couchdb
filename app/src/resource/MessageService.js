angular.module('app.resource.message.couchdb', []).provider('Message', function(){

    /**
     * Define configuration into angular config phase (app.js)
     * @type {{uri: null, login: null, password: null}}
     */
    this.config = {
        uri : null,
        auth: {
            username : null,
            password : null
        }
    };

    /**
     * Service definition
     * @param $q
     * @returns {{connect: connect, findAll: findAll, save: save, findAllByCommunication: findAllByCommunication, findAllCommunicators: findAllCommunicators}}
     */
    this.$get = function($q){

        var db = new PouchDB(this.config.database, {auth: this.config.auth});

        var findAll = function(){
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

        var save = function(message){
            var deferred = $q.defer();
            db.post(message, function (err, response) {
                if(err){
                    deferred.reject(err);
                }else{
                    // Decorate the nude object with CouchDB attributes : _id, _rev...
                    angular.extend(message, response);
                    deferred.resolve(message);
                }
            });
            return deferred.promise;
        };

        var findAllByCommunication = function(communicators){
            var deferred = $q.defer();
            db.query(function(doc) {
                var communicationKeys = [doc.from, doc.to].sort();
                emit(communicationKeys, doc);
            }, {
                startkey: communicators.sort(),
                endkey:communicators.sort()
            }, function(err, doc) {
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(doc.rows.map(function(row){
                        return row.value;
                    }));
                }
            });
            return deferred.promise;
        };

        var findAllCommunicators = function(){
            var deferred = $q.defer();
            db.query({
                map: function(doc) {
                    emit(doc.from, doc.who);
                    emit(doc.to);
                },
                reduce: function(key, value){
                    for(var i = 0; i < value.length; i++){
                        if(value[i]){
                            return value[i]
                        }
                    }
                }
            }, {
                group : true
            }, function(err, doc) {
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(doc.rows);
                }
            });
            return deferred.promise;
        };

        var findMyRelations = function(avatar){
            var id = parseInt(avatar.split('-')[1]);
            var deferred = $q.defer();
            db.query({
                map: function(doc) {
                    var getKey = function(avatar){
                        return parseInt(avatar.split('-')[1]);
                    };
                    var keys = [getKey(doc.to), getKey(doc.from)];
                    emit(keys, doc.who);
                },
                reduce: function(key, value){
                    return [value[0], key.length];
                }
            }, {
                startkey: [id, 1],
                endkey: [id, 16],
                group : true
            }, function(err, doc) {
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(doc.rows);
                }
            });
            return deferred.promise;
        };

        /**
         * Public service API
         */
        return {
            findAll: findAll,
            save: save,
            findAllByCommunication: findAllByCommunication,
            findAllCommunicators: findAllCommunicators,
            findMyRelations: findMyRelations
        }
    };

});