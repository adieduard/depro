var getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var app = angular.module("depro", []);

app.controller("rentable", function ($scope) {
    var id = getParameterByName("id");
    var selected;
    angular.forEach(rentables, function (item) {
        if (item.Id == id) {
            selected = item;
        }   
    });
    $scope.rentable = selected;
});