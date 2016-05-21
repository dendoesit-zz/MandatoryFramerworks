(function () {
    "use strict";

    function categoryService($http, $resource) {
        var Category = $resource("api/categories/:id", {
            _id: '@id'
        });

        var getCategory = function (id) {
            return Category.get({
                id: id
            }).promise;
        };
        var getCategories = function () {
            return $http.get("/api/categories/")
                .then(function (response) {
                    return response.data;
                });
        };
        return {
            getCategory: getCategory,
            getCategories: getCategories
        };
    }
    angular
        .module("app")
        .factory("categoryService", categoryService);
})();