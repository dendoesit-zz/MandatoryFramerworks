(function () {
    "use strict";
    
    function tagService($http, $resource) {
        var Tag = $resource("api/tags/:id", {
            _id: '@id'
        });
        
        var getTag = function (id) {
            return Tag.get({
                id: id
            }).promise;
            console.log('this is your tag');
            console.log(Tag);
        };
        var getTags = function(){
            return $http.get("/api/tags/")
                .then(function (response) {
                    return response.data;
                });
        };
        return {
            getTag: getTag,
            getTags: getTags
        };
        
    }
    
    angular
        .module("app")
        .factory("tagService", tagService);
})();