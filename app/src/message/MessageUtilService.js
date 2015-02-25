angular.module('app').factory('MessageUtilService', function (AvatarService) {

    var splitByPeriodsAndSort = function(messages){

        var periods = [{
            label: 'Today',
            className: 'md-primary',
            from: function(){
                var d = new Date();
                d.setHours(0,0,0,0);
                return d.getTime();
            }
        },{
            label: 'Yesterday',
            className: 'md-accent',
            from: function(){
                var d = new Date();
                d.setHours(0,0,0,0);
                d.setDate(d.getDate() - 1);
                return d.getTime();
            }
        },{
            label: 'This week',
            className: 'md-warn',
            from: function(){
                var d = new Date();
                d.setHours(0,0,0,0);
                d.setDate(d.getDate() - d.getDay());
                return d.getTime();
            }
        },{
            label: 'This month',
            className: 'md-warn',
            from: function(){
                var d = new Date();
                d.setHours(0,0,0,0);
                d.setDate(0);
                return d.getTime();
            }
        },{
            label: 'Old',
            className: 'md-warn',
            from: function(){
                return 0;
            }
        }];

        var findPeriodIndex = function(date){
            for(var i in periods){
                if(date > periods[i].from()){
                    return i;
                }
            }
        };

        var messagesMap = periods.map(function(period){
            return {
                label: period.label,
                className: period.className,
                messages: []
            }
        });

        var sortPeriod = function(messagesMap){
            messagesMap.forEach(function(el){
                el.messages.sort(function(m1, m2){
                    return m1.when > m2.when ? 1: -1;
                });
            });
            return messagesMap;
        };

        angular.forEach(messages, function(message){
            var index = findPeriodIndex(message.when);
            messagesMap[index].messages.push(message);
        });
        return sortPeriod(messagesMap);
    };

    var toTiles = function(users){
        var byNbOfConversation = function(r1, r2){
            return (r1.value[1] > r2.value[1])? -1: 1;
        };
        var mapToTiles = function(u){
            var avatar = 'svg-' + u.key[1];
            var spanCalculation = function(nbOfConversations, boundary){
                boundary.max = boundary.max - boundary.min;
                nbOfConversations -= boundary.min;
                var percent = nbOfConversations / boundary.max * 100;
                var result = {
                    row : 1,
                    col : 1
                };
                if(percent > 66){
                    result = {
                        row : 2,
                        col : 2
                    }
                }else if(percent > 33){
                    result = {
                        row : 1,
                        col : 2
                    }
                }
                return result;
            };
            var getBoundary = function(nbs){
                var result = {
                    min: Number.MAX_VALUE,
                    max: 0
                };
                for(var i in nbs){
                    if(nbs[i] > result.max){
                        result.max = nbs[i];
                    }
                    if(nbs[i] < result.min){
                        result.min = nbs[i];
                    }
                }
                return result;
            };
            return {
                avatar: avatar,
                title: u.value[0],
                background: AvatarService.findColorByAvatar(avatar),
                span: spanCalculation(u.value[1], getBoundary(users.map(function(u){
                    return u.value[1];
                })))
            };
        };
        return users.sort(byNbOfConversation).map(mapToTiles);
    };

    return{
        splitByPeriodsAndSort: splitByPeriodsAndSort,
        toTiles: toTiles
    };

});