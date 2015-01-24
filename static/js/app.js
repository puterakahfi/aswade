var app = angular.module('aswadeApp', ['ngRoute']);
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/beranda', {
                    templateUrl: 'partials/beranda.html',
                    controller: 'berandaCtrl'
                }).
                when('/designers', {
                    templateUrl: 'partials/designers.html',
                    controller: 'aswadeCtrl'
                }).
                when('/about', {
                    templateUrl: 'partials/about.html',
                    controller: 'aboutCtrl'
                }).
                when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'loginCtrl'
                }).
                otherwise({
                    redirectTo: '/beranda'
                });
    }]);
app.controller('aswadeCtrl', function ($scope) {
});

app.controller('berandaCtrl', function ($scope) {
    $scope.gallery = [1, 2, 3, 4];
});

app.controller('aboutCtrl', function ($scope) {
});

app.controller('loginCtrl', function ($scope) {
});



