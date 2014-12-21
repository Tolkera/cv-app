describe('mvLoginCtrl', function(){
    var scope, ctrl, identity, q, mockProjects, deferred, httpBackend, projectsService;

    beforeEach(module('cvApp'));

    beforeEach(inject(function($injector, $rootScope, $controller, $q, $httpBackend, mvProjects) {
        q = $q;
        mockProjects = {
            getProjects: function(){
                deferred = q.defer();
                deferred.resolve({data: {test: "test"} });
                return deferred.promise;
            }
        };
        projectsService = mvProjects;
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('mvSkillsCtrl', { $scope: scope, mvProjects: mockProjects});
    }));

    describe('mvSkills', function(){
        it('should have method getProjects', function(){
            expect(scope.projects).toBeUndefined();
        });

        it('should populate the project scope', function(){
            scope.$apply();
            expect(scope.projects).toEqual({test: "test"})
        });
    });

})