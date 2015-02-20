angular.module('app').factory('MessageUtilService', function () {

    var splitByPeriods = function(messages){

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
        angular.forEach(messages, function(message){
            var index = findPeriodIndex(message.when);
            messagesMap[index].messages.push(message);
        });
        return messagesMap;
    };

    return{
        splitByPeriods: splitByPeriods
    };

});