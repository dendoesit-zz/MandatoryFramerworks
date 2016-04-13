(function () {
    "use strict";


    angular.module('app').controller('mvUserListCtrl',
        function ($scope, mvUser) {
            $scope.users = mvUser.query();
        });

//    var resetUser = function () {
//        $scope.user = $scope.user || {};
//        $scope.user.username = "";
//        $scope.user.firstName = "";
//        $scope.user.lastName = "";
//        $scope.user.salt = "";
//        $scope.user.hashed_pwd = "";
//        $scope.user.roles = "";
//    };
//
//    $scope.openCreateUserModel = function () {
//        resetUser();
//        $scope.modalTitle = "Create user";
//    }
//    $scope.openEditUserModal = function (id) {
//        $scope.modalTitle = "Edit user";
//        usersService.getUser(id).then(function (user) {
//            $scope.user = user;
//        });
//
//    };
//
//    $scope.saveUser = function () {
//        usersService.saveUser($scope.user).then(function () {
//            getUsers();
//        });
//    };
//
//    $scope.deleteUser = function (id) {
//        usersService.getUser(id).then(function (user) {
//            $scope.user = user;
//        });
//    };
//
//    $scope.performDeleteUser = function () {
//        usersService.deleteUser($scope.user._id).then(function () {
//            getUsers();
//        });
//    };
//
//    getUser();
//    resetUsers();
//
//
})();