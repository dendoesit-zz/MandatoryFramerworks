(function () {
    "use strict";

    angular
        .module('app')
        .controller('mvCategoryListCtrl',
            function ($scope, mvNotifier, $http, $resource, categoryService) {
                var CategoryResource = $resource('/api/categories/:id', {
                    _id: "@id"
                });
                var refresh = function () {
                    $scope.categories = CategoryResource.query();
                };
                refresh();
        
                $scope.addCategory = function () {
                    $http.post('/api/categories', $scope.category).success(function (response) {
                        mvNotifier.notify('Category created!');
                        refresh();
                    });
                };

                $scope.deleteCategory = function (id) {
                    $http.delete('/api/categories/' + id).success(function (response) {
                        mvNotifier.notify('Category deleted !');
                        refresh();
                    });
                };

                $scope.edit = function (id) {
                    $http.get('/api/categories/' + id).success(function (response) {
                        $scope.category = response;
                    });
                };
                $scope.updateCategory = function () {
                    $http.put('/api/categories/' + $scope.category._id, $scope.category);
                    console.log('we tried to save the new category');
                    refresh();
                };
            });
})();