'use strict';

angular.module('avatars', []).service('AvatarService', function ($q){
    var avatars = [
        {
            who: 'Lia Lugo',
            avatar: 'svg-1'
        },
        {
            who: 'George Duke',
            avatar: 'svg-2'
        },
        {
            who: 'Gener Delosreyes',
            avatar: 'svg-3'
        },
        {
            who: 'Lawrence Ray',
            avatar: 'svg-4'
        },
        {
            who: 'Ernesto Urbina',
            avatar: 'svg-5'
        },
        {
            who: 'Gani Ferrer',
            avatar: 'svg-6'
        }
    ];

    // Promise-based API
    return {
        auth: function(){
            return $q.when(avatars[Math.floor(Math.random()*avatars.length)]);
        },
        loadAll : function() {
            return $q.when(avatars);
        }
    };
});