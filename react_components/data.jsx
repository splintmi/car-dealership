var React = require('react');
var $ = require('jquery');

module.exports = (function () {


    var findById = function (id) {
            var deferred = $.Deferred();
            var car = null;
            var l = cars.length;
            for (var i = 0; i < l; i++) {
                if (cars[i].id == id) {
                    car = cars[i];
                    break;
                }
            }
            deferred.resolve(car);
            return deferred.promise();
        },

		getAll = function () {
            var deferred = $.Deferred();
            var results = cars.filter(function (element) {
                var fullName = element.type + " " + element.make;
                return fullName.toLowerCase();
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByType = function (searchKey) {
            var deferred = $.Deferred();
            var results = cars.filter(function (element) {
                var fullName = element.type + " " + element.make;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByMake = function (make) {
            var deferred = $.Deferred();
            var results = cars.filter(function (element) {
                return make === element.make;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        cars = [
            {"id": 1, "type": "compact", "make": "ford"},
            {"id": 2, "type": "suv", "make": "chevy"},
            {"id": 3, "type": "luxury", "make": "ford"},

            {"id": 4, "type": "convertable", "make": "ford"},
            {"id": 5, "type": "economy", "make": "chevy"},
            {"id": 6, "type": "mini-van", "make": "ford"},

            {"id": 7, "type": "compact", "make": "ford"},
            {"id": 8, "type": "suv", "make": "chevy"},
            {"id": 9, "type": "luxury", "make": "ford"},

            {"id": 10, "type": "convertable", "make": "ford"},
            {"id": 11, "type": "suv", "make": "chevy"},
            {"id": 12, "type": "mini-van", "make": "ford"},

            {"id": 13, "type": "compact", "make": "ford"},
            {"id": 14, "type": "economy", "make": "chevy"},
            {"id": 15, "type": "luxury", "make": "ford"}
        ];


    // The public API
    return {
        findById: findById,
        getAll: getAll,
        findByType: findByType,
        findByMake: findByMake
    };

}());