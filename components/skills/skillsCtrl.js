angular.module('cvApp').controller('mvSkillsCtrl', ['$scope', 'mvProjects', function($scope, mvProjects){
    mvProjects.getProjects().then(function(success) {
        $scope.projects = success.data;
    });
}]);

angular.module('cvApp').factory('mvProjects', ['$q', '$http', function($q, $http){
    return {
        getProjects: function(){
            var dfd = $q.defer();
            $http.get('mocks/projects.json').then(function(data){
                dfd.resolve(data);
            });
            return dfd.promise;
        }
    }
}]);