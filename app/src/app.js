angular.module('app', [
    'ngMaterial',
    'avatars'
]).config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('light-blue');

}).run(function(){

});