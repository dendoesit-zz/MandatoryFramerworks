angular.module('app').controller('myMainCtrl', function($scope){
    $scope.courses = [
        {name: 'Javascript for Dummies', featured:true, published: new Date('1/1/12')},
        {name: 'C# for Dummies', featured:true, published: new Date('3/2/14')},
        {name: 'Java for Dummies', featured:true, published: new Date('1/1/15')},
        {name: 'C++ for Dummies', featured:true, published: new Date('1/3/14')},
        {name: 'Python for Dummies', featured:false, published: new Date('1/5/13')},
        {name: 'Ruby for Dummies', featured:true, published: new Date('1/4/14')},
        {name: 'Laravel for Dummies', featured:true, published: new Date('1/3/15')},
        {name: 'Git for Dummies', featured:true, published: new Date('1/2/15')}
        
    ]
});