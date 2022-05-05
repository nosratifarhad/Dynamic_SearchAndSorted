var app = angular.module('typedMessageApp', ['ngTouch']);

//app.constant('gridConfig', {
//    timeOutOnDataFetch: 0,
//    url: "/api/typedMessage",
//    paginationItemsPerPage: 10,
//    paginationMaxSize: 10,
//    paginationPageSizes: [10, 25, 50, 75, 100],
//});

app.controller('typedMessageController', ['$scope', function ($scope) {


    $scope.DialogHandler = {

        dialogUIItems: {
            //title: '',
            //titleClass: ''
        },

        setDialogUIItems: function (dialogUIItems) {
            this.dialogUIItems = dialogUIItems;
        },

        dialogOk: function () {
            $scope.$close('ok');
        },

        dialogCancel: function () {
            $scope.$dismiss('cancel');
        },

    };

    if ($scope.dialogUIItems != undefined)
        $scope.DialogHandler.setDialogUIItems($scope.dialogUIItems);

}]);