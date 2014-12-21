describe('location', function() {
    var $route;

    beforeEach(module('cvApp'));

    beforeEach(inject(function($injector) {
        $route = $injector.get('$route');
    }));

    describe('mvProjects', function(){
        it('should have method getProjects', function(){
            expect($route.routes['/'].templateUrl).toEqual('components/skills/skills.html');
            expect($route.routes['/'].controller).toEqual('mvSkillsCtrl');
            expect($route.routes['/contact'].templateUrl).toEqual('components/contact/contact.html');
            expect($route.routes['/about'].templateUrl).toEqual('components/about/about.html');
            expect($route.routes[null].redirectTo).toEqual('/')
        });
    });
});

