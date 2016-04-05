angular.module('app').controller('myLoginCtrl', function ($scope) {
    $scope.signin = function (username, password) {
        console.log("I'm logged in");
    }
})