describe('projectsService', function(){
    var projectsService, $q, $httpBackend, $rootScope;

    beforeEach(module('cvApp'));
    beforeEach(inject(function($injector) {
        projectsService = $injector.get('mvProjects');
        $httpBackend = $injector.get('$httpBackend');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
        $httpBackend.whenGET('mocks/projects.json').respond({test: 'test'});
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('mvProjects', function(){
        it('should have method getProjects', function(){
            expect(projectsService.getProjects()).toBeDefined();
            $httpBackend.expect('GET', 'mocks/projects.json');
            $httpBackend.flush();
        });

        it('should return a promise object', function(){
            projectsService.getProjects();
            expect(projectsService.getProjects().then).toBeDefined();
            $httpBackend.flush();
        });


        it('should resolve with correct data', function () {
            var promise = projectsService.getProjects(),
                responseData;
            promise.then(function (response) {
                responseData = response;
            });
            $httpBackend.flush();
            expect(responseData.data).toEqual({test: 'test'});

        });
    });
});