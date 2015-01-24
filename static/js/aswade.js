var app = angular.module('aswadeApp', ['mm.foundation']);
app.controller('GalleryCtrl', function ($scope) {

    this.detailGallery = function () {
        alert('test');
    };
    return $scope.AppCtrl = this;
});
