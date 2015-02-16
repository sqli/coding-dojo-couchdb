'use strict';

angular.module('avatars', []).service('AvatarService', function ($q){
    var avatars = [
        {
            name: 'Lia Lugo',
            avatar: 'svg-1'
        },
        {
            name: 'George Duke',
            avatar: 'svg-2'
        },
        {
            name: 'Gener Delosreyes',
            avatar: 'svg-3'
        },
        {
            name: 'Lawrence Ray',
            avatar: 'svg-4'
        },
        {
            name: 'Ernesto Urbina',
            avatar: 'svg-5'
        },
        {
            name: 'Gani Ferrer',
            avatar: 'svg-6'
        }
    ];

    // Promise-based API
    return {
        loadAll : function() {
            return $q.when(avatars);
        }
    };
});