angular.module('app.resource.message.tp', []).provider('Message', function(){

    this.config = {
        uri : null,
        auth: {
            username : null,
            password : null
        }
    };

    this.$get = function($q){

        /**
         * @returns {.QueueItem.promise|*|promise|.TaskQueue.promise|TaskQueue.promise|require.QueueItem.promise}
         [{
             "from": "svg-5",
             "who": "Ernesto Urbina",
             "when": 1424294637736,
             "what": "Oui et toi?"
         },
         {
             "from": "svg-2",
             "who": "George Duke",
             "when": 1424294607980,
             "what": "Hie Ernesto"
         }]
         */
        var findAll = function(){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        /**
         * @returns {.QueueItem.promise|*|promise|.TaskQueue.promise|TaskQueue.promise|require.QueueItem.promise}
         [{
             "key": "svg-1",
             "value": "Lia Lugo"
         },
         {
             "key": "svg-2",
             "value": "George Duke"
         }]
         */
        var findAllCommunicators = function(){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        /**
         *
         * @param message
         * {
            "from": "svg-2",
            "who": "George Duke",
            "when": 1424294607980,
            "what": "Hie Ernesto"
         * }
         * @returns {.QueueItem.promise|*|promise|.TaskQueue.promise|TaskQueue.promise|require.QueueItem.promise}
         {
            "ok" : true,
            "id" : "8A2C3761-FFD5-4770-9B8C-38C33CED300A",
            "rev" : "1-d3a8e0e5aa7c8fff0c376dac2d8a4007"
         }
         */
        var save = function(message){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        /**
         *
         * @param communicators
         * ["svg-1", "svg-3"]
         * @returns {.QueueItem.promise|*|promise|.TaskQueue.promise|TaskQueue.promise|require.QueueItem.promise}
         [{
             "from": "svg-3",
             "to": "svg-1",
             "who": "Gener Delosreyes",
             "when": 1424294630895,
             "what": "Yo"
         },
         {
             "from": "svg-1",
             "to": "svg-3",
             "who": "Lia Lugo",
             "when": 1424294706491,
             "what": "Ca va?"
         }]
         */
        var findAllByCommunication = function(communicators){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        /**
         * @param avatar
         * 'svg-1'
         * @returns {.QueueItem.promise|*|promise|.TaskQueue.promise|TaskQueue.promise|require.QueueItem.promise}
         [{
             "key": [1, 1],
             "value": ["Lia Lugo", 1]
         },
         {
             "key": [1, 2],
             "value": ["George Duke", 8]
         }]
         */
        var findMyRelations = function(avatar){
            var deferred = $q.defer();
            //deferred.resolve();
            //deferred.reject();
            return deferred.promise;
        };

        return {
            findAll: findAll,
            findAllCommunicators: findAllCommunicators,
            save: save,
            findAllByCommunication: findAllByCommunication,
            findMyRelations: findMyRelations
        }
    };

});