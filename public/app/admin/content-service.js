(function () {
    "use strict";

    function contentService($http, $resource) {
        var Content = $resource("api/contents/:id", {
            _id: '@id'
        });

        var getContent = function (id) {
            return Content.get({
                id: id
            }).promise;
        };
        return {
            getContent: getContent
        };
    }

    angular
        .module('app')
        .factory('contentService', contentService);
})();