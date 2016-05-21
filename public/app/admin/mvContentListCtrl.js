(function () {
    "use strict";

    angular
        .module('app')
        .controller('mvContentListCtrl',
            function ($scope, mvNotifier, $location, $http, $resource, contentService) {
                var ContentResource = $resource('api/contents/:id', {
                    _id: "@id"
                });
                var refresh = function () {
                    $scope.contents = ContentResource.query();
                };
                refresh();

                $scope.add = function () {
                    $http.post('/api/contents', $scope.content).success(function (response) {
                        mvNotifier.notify('Content created');
                        refresh();
                    });
                };
                $scope.delete = function (id) {
                    $http.delete('/api/contents/' + id).success(function (response) {
                        mvNotifier.notify('Content deleted');
                        refresh();
                    });
                };

                $scope.edit = function (id) {
                    $http.get('/api/contents' + id).success(function (response) {
                        $scope.content = response;
                        console.log("trying to edit");
                        console.log($scope.content);
                    });
                };

                $scope.update = function () {
                    $http.put('/api/contents' + $scope.content._id, $scope.content);
                    refresh();
                };
            });
})();