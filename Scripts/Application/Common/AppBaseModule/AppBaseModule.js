var app = angular.module('baseApp', ['pascalprecht.translate', 'ngCookies', 'ngAnimate']);


app.constant('baseConfig', {
    timeOutOnDataFetch: 0,
    paginationItemsPerPage: 10,//4
    paginationMaxSize: 100,
    paginationPageSizes: [10, 25, 50, 75, 100],
});

app.controller('baseController', ['$scope', 'baseConfig', '$timeout', '$window', '$templateCache', 'GridService', '$translate',
    function ($scope, baseConfig, $timeout, $window, $templateCache, GridService, $translate) {


        $templateCache.put('ui-grid/ui-grid-filter-custom',
            "<div class=\"ui-grid-filter-container\" ng-repeat=\"colFilter in col.filters\" ng-class=\"{'ui-grid-filter-cancel-button-hidden' : colFilter.disableCancelFilterButton === true }\">" +
            "<div ng-if=\"colFilter.type !== 'select'\"><input type=\"text\" class=\"input-sm form-control\" ng-model=\"colFilter.term\" ng-model-options=\"{ debounce : { 'default' : 700, 'blur' : 0 }}\" ng-attr-placeholder=\"{{colFilter.placeholder || ''}}\" aria-label=\"{{colFilter.ariaLabel || aria.defaultFilterLabel}}\"><div role=\"button\" class=\"ui-grid-filter-button\" ng-click=\"removeFilter(colFilter, $index)\" ng-if=\"!colFilter.disableCancelFilterButton\" ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\" ng-show=\"colFilter.term !== undefined && colFilter.term !== null && colFilter.term !== ''\"><i class=\"ui-grid-icon-cancel\" ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;</i></div></div>" +
            "<div ng-if=\"colFilter.type === 'select'\"><select class=\"form-control input-sm\" ng-model=\"colFilter.term\" ng-attr-placeholder=\"{{colFilter.placeholder || aria.defaultFilterLabel}}\" aria-label=\"{{colFilter.ariaLabel || ''}}\" ng-options=\"option.value as option.label for option in colFilter.selectOptions\"><option value=\"\"></option></select><div role=\"button\" class=\"ui-grid-filter-button-select\" ng-click=\"removeFilter(colFilter, $index)\" ng-if=\"!colFilter.disableCancelFilterButton\" ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\" ng-show=\"colFilter.term !== undefined && colFilter.term != null\"><i class=\"ui-grid-icon-cancel\" ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;</i></div></div>" +
            "</div>"
        );

        $templateCache.put('ui-grid/ui-grid-row-custom',
            '<div ng-dblclick="grid.appScope.rowDblClick(row)" >' +
            '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>'
        );


        //----------CK_EDITOR-----------//
        //$scope.config = {};
        //$scope.config.toolbarGroups = [
        //    { name: 'basicstyles', groups: ['basicstyles'] },
        //    //{ name: 'clipboard', groups: ['clipboard', 'undo'] },
        //    //{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        //    //{ name: 'forms', groups: ['forms'] },
        //    { name: 'paragraph', groups: ['align'] },
        //    //{ name: 'links', groups: ['links'] },
        //    //{ name: 'insert', groups: ['insert'] },
        //    //{ name: 'styles', groups: ['styles'] },
        //    //{ name: 'colors', groups: ['colors'] },
        //    //{ name: 'document', groups: ['mode', 'document', 'doctools'] },
        //    //{ name: 'tools', groups: ['tools'] },
        //    //{ name: 'others', groups: ['others'] },
        //    //{ name: 'about', groups: ['about'] }

        //];
        //$scope.config.removeButtons = 'BGColor,Anchor,Subscript,Superscript,Paste,Copy,Cut,Undo,Redo';

        console.log("this is your app's controller");
        $scope.response = null;
        $scope.widgetId = null;

        $scope.model = {
            key: '6LcOELIUAAAAAEpwp_wzFuPKxMakatrYHGHgeDtm'
        };

        $scope.setResponse = function (response) {
            console.info('Response available');

            $scope.response = response;
        };

        $scope.setWidgetId = function (widgetId) {
            console.info('Created widget ID: %s', widgetId);

            $scope.widgetId = widgetId;
        };

        $scope.cbExpiration = function () {
            console.info('Captcha expired. Resetting response object');

            vcRecaptchaService.reload($scope.widgetId);

            $scope.response = null;
        };

        //----------END-----------//


        $scope.UiLockTools = {

            needslockUI: false,

            LockUI: function () {
                this.needslockUI = true;
            },

            UnLockUI: function () {
                this.needslockUI = false;
            },
        };

        $scope.customDialogTools = {

            showCustomErrorMessageDialog: function (messageText) {

                hsEntityDialogService.openEntityModalDialog({
                    entityDialogType: uiEntityDialogTypes.EntityCustomMessage,
                    customMessageOptions: {
                        dialogType: uiDialogTypes.error,
                        message: messageText,
                        okButton: {
                            text: 'تایید',
                            visible: false,
                        },
                        cancelButton: {
                            text: 'بستن',
                            visible: true,
                        },
                    },
                    onSuccessHandler: function (dialogResult) {
                        //alert('success');
                    },
                    onDismissHandler: function (dialogCancelResult) {
                        //alert('dismiss');
                    },
                });
            },

            showCustomSuccessMessageDialog: function (messageText) {

                hsEntityDialogService.openEntityModalDialog({
                    entityDialogType: uiEntityDialogTypes.EntityCustomMessage,
                    customMessageOptions: {
                        dialogType: uiDialogTypes.simpleDialog,
                        message: messageText,
                        okButton: {
                            text: 'تایید',
                            visible: false,
                        },
                        cancelButton: {
                            text: 'بستن',
                            visible: true,
                        },
                    },
                    onSuccessHandler: function (dialogResult) {
                        //alert('success');
                    },
                    onDismissHandler: function (dialogCancelResult) {
                        //alert('dismiss');
                    },
                });
            },
        };

        $scope.PagedListInfo = {
            dataList: [],
            pageIndex: 0,
            pageSize: baseConfig.paginationItemsPerPage,
            totalCount: 0,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false
        };

        $scope.SortParamListClass = new SortParamListClass();
        $scope.SearchFilterTermListClass = new SearchFilterTermListClass();

        $scope.filterTermsAndSortParams = {
            PageIndex: 0,
            PageSize: 0,
            EntityFilterTermList: [],
            EntitySortParamList: [],
        };

        $scope.filterCriteria = {
            pageNumber: 1,
        };

        $scope.InitAndGetFilterTermsAndSortParams = function () {

            //Server Gets 0 for the page 1
            $scope.filterTermsAndSortParams.PageIndex = $scope.filterCriteria.pageNumber - 1;
            $scope.filterTermsAndSortParams.PageSize = $scope.PagedListInfo.pageSize;
            $scope.filterTermsAndSortParams.EntitySortParamList = $scope.SortParamListClass.sortParamList;
            $scope.filterTermsAndSortParams.EntityFilterTermList = $scope.SearchFilterTermListClass.searchFilterTermList;

            return $scope.filterTermsAndSortParams;
        };

        $scope.selectedEntity = {};

        $scope.initDataPage = function () {

            $scope.addDefaultSortParam();

            $scope.addDefaultFilters();

            $scope.filterCriteria.pageNumber = 1;

            $scope.getPage();
        };

        $scope.pageChanged = function (pagingnumber) {

            if (pagingnumber >= $scope.filterCriteria.pageNumber) {
                //$scope.filterCriteria.pageNumber++;
                $scope.filterCriteria.pageNumber = pagingnumber;
                $scope.getPage();
            }
            else if (pagingnumber <= $scope.filterCriteria.pageNumber) {
                //$scope.filterCriteria.pageNumber--;
                $scope.filterCriteria.pageNumber = pagingnumber;

                $scope.getPage();

            }
        };

    }]);

app.filter('trustAsHtml', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);