
var app = angular.module("depro", []);

app.filter('matchRentables', function () {
    return function (items, freetext, roomsfilter, floorfilter, typefilter) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.Name.toLowerCase().indexOf(freetext.toLowerCase()) != -1) {
                filtered.push(item);
            } else if (freetext != '' && freetext != null && item.Description.toLowerCase().indexOf(freetext.toLowerCase()) != -1) {
                filtered.push(item);
            } else if (freetext == '' || freetext == null) {
                filtered.push(item);
            }
        });

        var floorfiltered = [];
        angular.forEach(filtered, function (item) {
            if (item.FloorNumber == floorfilter) {
                floorfiltered.push(item);
            } else if (floorfilter == '' || floorfilter == null) {
                floorfiltered.push(item);
            }
        });

        var roomfiltered = [];
        angular.forEach(floorfiltered, function (item) {
            if (item.Rooms == roomsfilter) {
                roomfiltered.push(item);
            } else if (roomsfilter == '' || roomsfilter == null) {
                roomfiltered.push(item);
            }
        });

        var typefiltered = [];
        angular.forEach(roomfiltered, function (item) {
            if (item.Type == typefilter) {
                typefiltered.push(item);
            } else if (typefilter == '-1' || typefilter == null) {
                typefiltered.push(item);
            }
        });

        return typefiltered;
    };
});

app.controller("rentables", function ($scope) {
    $scope.rentables = rentables;
    $scope.freetext = '';
    $scope.roomsfilter = '';
    $scope.floorfilter = '';
    $scope.typefilter = '-1';
    $scope.haselevator = false;
    $scope.hasparking = false;
    $scope.provideinvoice = false;
    $scope.kitcheniland = false;
    $scope.luguriesbath = false;
    $scope.lugurieslivingroom = false;
    $scope.Luguriesbedroom = false;

});

$(function () {
    // JS only for the switch
    $("#switch-view").click(function () {
        $(this).find("button").toggleClass("active");
        $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
    });
});