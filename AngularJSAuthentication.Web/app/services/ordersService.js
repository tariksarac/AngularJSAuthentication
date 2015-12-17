'use strict';
app.factory('ordersService', ['$http', function ($http) {
    var serviceBase = "http://localhost:58558/";
    var ordersServiceFactory = {};

    var _getOrders = function () {
       return $http.get(serviceBase + "api/Orders").then(function (response) {
            return response;
        })
    }
    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;
}])