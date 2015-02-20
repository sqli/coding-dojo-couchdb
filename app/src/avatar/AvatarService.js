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
        },
        {
            who: 'Antonio Banderas',
            avatar: 'svg-7'
        },
        {
            who: 'Alpha Blondie',
            avatar: 'svg-8'
        },
        {
            who: 'Miss Strong',
            avatar: 'svg-9'
        },
        {
            who: 'Danny the dog',
            avatar: 'svg-10'
        },
        {
            who: 'Cat Stevens',
            avatar: 'svg-11'
        },
        {
            who: 'Michelle Obama',
            avatar: 'svg-12'
        },
        {
            who: 'Bonnie Gates',
            avatar: 'svg-13'
        },
        {
            who: 'Bruce Lee',
            avatar: 'svg-14'
        },
        {
            who: 'Margarette Thatcher',
            avatar: 'svg-15'
        },
        {
            who: 'Bill Gates',
            avatar: 'svg-16'
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