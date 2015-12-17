'use strict';
app.controller('ordersController', ['$scope','ordersService', function ($scope, orderService) {
    $scope.orders = [];
    orderService.getOrders().then(function (response) {
        $scope.orders = response.data;
    },
    function (error) {
        alert(error.data.message)
    });

}])