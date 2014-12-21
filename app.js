angular.module('cvApp', ['ngRoute']);

angular.module('cvApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true
    });

    $routeProvider
        .when('/',{
            templateUrl: 'components/skills/skills.html',
            controller: 'mvSkillsCtrl'
        })
        .when('/contact',{
            templateUrl: 'components/contact/contact.html'
        })
        .when('/about',{
            templateUrl: 'components/about/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


