var searchConstants = {

    sortDir: {
        asc: 0,
        desc: 1,
        none: 2,
    },

    colType: {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        date: 'date',
        object: 'object',
        numberStr: 'numberStr',
    },
    pageSizeUnlimited: 9999999,
    pageSizeInlimited: 4,
    firstPageIndex: 0,
};
//------------ORG--------------//
var SearchFilterTerm = /** @class */ (function () {

    function SearchFilterTerm(searchTerm, searchValue, searchFilterOp, logicalOp) {
        this.searchTerm = searchTerm;
        this.searchValue = searchValue;
        this.searchFilterOp = searchFilterOp;
        this.logicalOp = logicalOp;
    }

    return SearchFilterTerm;
}());

var SearchFilterTermListClass = /** @class */ (function () {

    function SearchFilterTermListClass() {
        this.searchFilterTermList = [];
    }

    SearchFilterTermListClass.prototype.AddSearchFilterTerm = function (searchTerm, searchValue, searchFilterOp, logicalOp) {
        this.searchFilterTermList.push(new SearchFilterTerm(searchTerm, searchValue, searchFilterOp, logicalOp));
    };

    SearchFilterTermListClass.prototype.RemoveSearchFilterTerm = function (searchTerm) {

        for (var i = this.searchFilterTermList.length - 1; i >= 0; i--) {
            if (this.searchFilterTermList[i].searchTerm.toLowerCase() === searchTerm.toLowerCase()) {
                this.searchFilterTermList.splice(i, 1);
            }
        }
    };

    SearchFilterTermListClass.prototype.ClearList = function () {
        this.searchFilterTermList = [];
    };

    return SearchFilterTermListClass;
}());

var SortParam = /** @class */ (function () {

    function SortParam(sortField, sortDir) {
        this.sortField = sortField;
        this.sortDir = (sortDir.toLowerCase() == 'asc' ? searchConstants.sortDir.asc : searchConstants.sortDir.desc);
    }

    return SortParam;
}());

var SortParamListClass = /** @class */ (function () {

    function SortParamListClass() {
        this.sortParamList = [];
    }

    SortParamListClass.prototype.AddSortParam = function (sortField, sortDir) {
        this.sortParamList.push(new SortParam(sortField, sortDir));
    };

    SortParamListClass.prototype.RemoveSortParam = function (sortField) {

        for (var i = this.sortParamList.length - 1; i >= 0; i--) {
            if (this.sortParamList[i].sortField.toLowerCase() === sortField.toLowerCase()) {
                this.sortParamList.splice(i, 1);
            }
        }
    };

    SortParamListClass.prototype.ClearList = function () {
        this.sortParamList = [];
    };

    return SortParamListClass;
}());
//------------END--------------//
//------------Other--------------//
var SearchFilterTermsList = /** @class */ (function () {

    function SearchFilterTermsList(searchFilterTermList, logicalOp, name) {
        this.entityFilterTermsList = searchFilterTermList;
        this.logicalOp = logicalOp;
        this.name = name;
    }

    return SearchFilterTermsList;
}());

var SearchFilterTermsListsClass = /** @class */ (function () {

    function SearchFilterTermsListsClass() {
        this.searchFilterTermsLists = [];
    }

    SearchFilterTermsListsClass.prototype.AddSearchFilterTermList = function (searchFilterTermList, logicalOp, name) {
        this.searchFilterTermsLists.push(new SearchFilterTermsList(searchFilterTermList, logicalOp, name));
    };

    SearchFilterTermsListsClass.prototype.RemoveSearchFilterTerm = function (name) {

        for (var i = this.searchFilterTermsLists.length - 1; i >= 0; i--) {
            if (this.searchFilterTermsLists[i].name.toLowerCase() === name.toLowerCase()) {
                this.searchFilterTermsLists.splice(i, 1);
            }
        }
    };

    SearchFilterTermsListsClass.prototype.ClearList = function () {
        this.searchFilterTermsLists = [];
    };

    return SearchFilterTermsListsClass;
}());

var FilterTermsAndSortParamsClass = /** @class */ (function () {

    function FilterTermsAndSortParamsClass() {
        this.SortParamListClass = new SortParamListClass();
        this.SearchFilterTermListClass = new SearchFilterTermListClass();

        this.filterTermsAndSortParams = {
            PageIndex: searchConstants.firstPageIndex,
            PageSize: searchConstants.pageSizeInlimited,//.pageSizeUnlimited,
            EntityFilterTermList: [],
            EntitySortParamList: [],
            EntityFilterTermsLists: [],
        };
    }

    FilterTermsAndSortParamsClass.prototype.initAndGetFilterTermsAndSortParams = function (pageIndex, pageSize) {

        //Server Gets 0 for the page 1
        this.filterTermsAndSortParams.PageIndex = pageIndex;
        this.filterTermsAndSortParams.PageSize = pageSize;
        this.filterTermsAndSortParams.EntitySortParamList = this.SortParamListClass.sortParamList;
        this.filterTermsAndSortParams.EntityFilterTermList = this.SearchFilterTermListClass.searchFilterTermList;

        return this.filterTermsAndSortParams;
    };

    FilterTermsAndSortParamsClass.prototype.addSortParam = function (sortField, sortDir) {

        this.SortParamListClass.AddSortParam(sortField, sortDir);
        //AddSortParam(sortField, hsGridService.GetSortDirByUIGridSortDirectionConstant(uiGridConstants.DESC));
    };

    FilterTermsAndSortParamsClass.prototype.addSearchFilterTerm = function (searchTerm, searchValue, searchFilterOp, logicalOp) {
        this.SearchFilterTermListClass.AddSearchFilterTerm(searchTerm, searchValue, searchFilterOp, logicalOp);
    };

    return FilterTermsAndSortParamsClass;
}());
//------------END--------------//

angular.module('GridTools', ['ui.grid'])
    .constant('uiGridColumnTypes', {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        date: 'date',
        object: 'object',
        numberStr: 'numberStr',
    })
    .factory('GridService', ['uiGridConstants', 'uiGridColumnTypes', function (uiGridConstants, uiGridColumnTypes) {

        return {

            GetSearchFilterOpByColumnType: function (colType) {

                var searchFilterOp = CommonConstants.FilterOps.equal;

                switch (colType) {
                    case searchConstants.colType.string:
                        searchFilterOp = CommonConstants.FilterOps.contains;
                        break;
                    case uiGridColumnTypes.number:
                    case uiGridColumnTypes.boolean:
                    case uiGridColumnTypes.date:
                    case uiGridColumnTypes.numberStr:
                    case uiGridColumnTypes.object:
                        searchFilterOp = CommonConstants.FilterOps.equal;
                        break;
                }

                return searchFilterOp;
            },


            GetSortDirByUIGridSortDirectionConstant: function (gridSortDirection) {

                var sortDir = 'none';

                switch (gridSortDirection) {
                    case uiGridConstants.ASC:
                        sortDir = 'asc';
                        break;
                    case uiGridConstants.DESC:
                        sortDir = 'desc';
                        break;
                }

                return sortDir;
            },


        };

    }]);