var app = angular.module("myapp",[]);

app.controller("myctrl",function($scope){
                $scope.names = [
                              {name:'pawan',country:'pakistan'},
                              {name:'kumar',country:'pakistan'}
                              ];     
});