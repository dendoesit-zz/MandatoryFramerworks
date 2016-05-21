(function () {
    "use strict";

    angular
        .module('app')
        .controller('mvTagListCtrl',
            function ($scope, mvNotifier, $location, $http, $resource, tagService) {
                var TagResource = $resource('api/tags/:id', {
                    _id: "@id"
                });
                var refresh = function () {
                    $scope.tags = TagResource.query();
                };
                refresh();

                $scope.addTag = function () {
                    console.log($scope.tag);
                    $http.post('/api/tags', $scope.tag).success(function (response) {
                        console.log(response);
                        mvNotifier.notify('Tag created');
                        refresh();
                    });

                };
                $scope.deleteTag = function (id) {
                    $http.delete('/api/tags/' + id).success(function (response) {
                        mvNotifier.notify('Tag deleted');
                        console.log('we tried deleting a tag');
                        refresh();
                    });
                };
                
                $scope.edit = function(id) {
                    $http.get('/api/tags/' + id).success(function (response) {
                        $scope.tag = response;
                    })
                }
                $scope.updateTag = function() {
                    $http.put('/api/tags/' + $scope.tag._id, $scope.tag);
                    console.log('we tried to save the new tag');
                    refresh();
                };
            });
})();