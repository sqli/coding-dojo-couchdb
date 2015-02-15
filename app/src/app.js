angular.module('app', [
    'ngMaterial',
    'avatars'
]).config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('purple');

}).run(function(){

});