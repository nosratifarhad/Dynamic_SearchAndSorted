var app = angular.module('newApp', ['baseApp', 'ngRoute',    'newAPITools',
]);
app.controller('newController', ['$scope', '$controller', '$sce', 
    '$window', '$route', '$http', 'newAPIService',
    function ($scope, $controller, $sce, 
        $window, $route, $http, newAPIService) {

        $controller('baseController', { $scope: $scope });

        $scope.APITools = {

            GetByFilterTermsAndSortParams: function () {
                newAPIService.GetByFilterTermsAndSortParams($scope.InitAndGetFilterTermsAndSortParams())
                    .then(function (data) {
                        $scope.PagedListInfo = data;
                        $scope.maxSize = 5;
                        $scope.PagedListInfo.pageIndex++;
                    }, function (errorReason) {
                        });
            },

            GetBylanguageID: function (languageID) {
                feedbackAPIService.GetBylanguageID(languageID)
                    .then(function (data) {
                        $scope.PagedListInfo = data;
                    }, function (errorReason) {
                    });
            },
        };

        $scope.addDefaultSortParam = function () {
            $scope.SortParamListClass.AddSortParam('Id',
                GridService.GetSortDirByUIGridSortDirectionConstant('desc'));
        };

        $scope.addDefaultFilters = function () {
            $scope.SearchFilterTermListClass.AddSearchFilterTerm('languageId',
                $scope.languageID,
                GridService.GetSearchFilterOpByColumnType('number'),
                CommonConstants.logicalOps.and);
        };

        $scope.getPage = function () {
            $scope.GeneralAPITools.GetByFilterTermsAndSortParams();
            $scope.GeneralAPITools.GetBylanguageID(1);
        };

        $scope.initDataForm = function () {
        };

        $scope.initPage = function () {
            $scope.initDataForm();
            $scope.initDataPage();
        };

        $scope.initPage();
    }]);