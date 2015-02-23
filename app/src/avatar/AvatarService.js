'use strict';

angular.module('avatars', ['ngResource']).config(function($mdIconProvider){
    $mdIconProvider.iconSet('avatar', 'svg/avatar-icons.svg', 128);
}).service('AvatarService', function ($q, $resource){

    var avatarsCache = [];

    // Promise-based API
    return {
        auth: function(){
            return $resource('stub/GET-me.json').get().$promise;
        },
        loadAll : function() {
            var deferred = $q.defer();
            $resource('stub/GET-avatars.json').query().$promise.then(function(avatars){
                avatarsCache = avatars;
                deferred.resolve(avatarsCache);
            }, deferred.reject);
            return deferred.promise;
        },
        findColorByAvatar: function(avatar){
            for(var i in avatarsCache){
                if(avatarsCache[i].avatar === avatar){
                    return avatarsCache[i].background;
                }
            }
        }
    };
});