(function () {
    "use strict";


angular
.module('app')
.controller('mvUserListCtrl',
    function ($scope, mvUser, mvNotifier, $location, mvAuth, usersService, $http, mvIdentity) {
        var refresh = function () {
            $scope.users = mvUser.query();
        };
        refresh();
        var resetUser = function () {
            $scope.user = $scope.user ||  {};
            $scope.user.email = "";
            $scope.user.password = "";
            $scope.user.fname = "";
            $scope.user.lname = "";
            $scope.user._id = null;
        };

        $scope.signup = function() {
        var newUserData = {
            username : $scope.user.username,
            password: $scope.user.password,
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName
        };
            console.log(newUserData); 


        mvAuth.createUser(newUserData).then(function () {
            mvNotifier.notify('User account created!');
            resetUser();
            refresh();
            $location.path('/');
            }, function (reason) {
                mvNotifier.error(reason);
            });
        };
        $scope.deleteUser = function (id) {
            $http.delete('/api/users/' + id).success(function (response) {
                mvNotifier.notify('User deleted!');
                console.log("we tried deleting");
                refresh();
            });
        };
        $scope.openEditUserModal = function (id) {
            $scope.modalTitle = "Edit user";
            usersService.getUser(id).then(function (user) {
                $scope.user = user;
                console.log("this is the user requested");
                console.log($scope.user);
            });
        };
        $scope.saveUser = function () {
            console.log('this is the user we are trying to save');
            console.log($scope.user);
            usersService.saveUser($scope.user).then(function () {
                mvNotifier.notify('User updated!');
                refresh();
            console.log('we tried to save the new user');
                console.log($scope.user);
            });
        };
    });
})();