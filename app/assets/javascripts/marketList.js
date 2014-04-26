/**
 * Created by Mrs Ryder on 18/04/14.
 */
var app = angular.module('app', []);

app.controller('currencyList', function ($scope, $http){
    $scope.currency=[];

    $scope.getCurrencies = function(){
        $http({method : 'GET',
            url : "https://openexchangerates.org/api/currencies.json?app_id=6334fc4be1884035840275ade9f84c9a"})
            .success(function(data, status){
                $scope.currency = data;
            })
            .error(function(data, status){
                alert("error");
            });
    }
});

app.controller('marketList', function ($scope, $http){
    $scope.rates=[];

    $scope.getRates = function(){
   $http({method : 'GET',
       url : "https://openexchangerates.org/api/latest.json?app_id=6334fc4be1884035840275ade9f84c9a"})
       .success(function(data, status){
        $scope.rates = data; // response data
       })
       .error(function(data, status){
        alert("error");
    });
};
});





