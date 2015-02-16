'use strict';

angular.module('messages', []).service('MessageService', function ($q){
    var messages = [
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1410126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1411126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1412126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1413126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1414126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1415126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1416126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1417126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1418126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1419126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1420126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1421126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1422126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-1',
            who: 'Lia Lugo',
            when: 1423126352000,
            what: " I'll be in your neighborhood doing errands"
        },
        {
            avatar: 'svg-4',
            who: 'Lawrence Ray',
            when: 1424126352000,
            what: " I'll be in your neighborhood doing errands"
        }
    ];

    // Promise-based API
    return {
        loadAll : function() {
            return $q.when(messages);
        }
    };
});