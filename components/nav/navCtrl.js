angular.module('cvApp').controller('navCtrl', ['$scope', '$location', function($scope, $location){
    $scope.isNavActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);