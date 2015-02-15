angular.module('app', [
    'ngMaterial',
    'avatars'
]).config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryColor('blue')
        .accentColor('light-blue');

}).run(function(){

});