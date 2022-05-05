angular.module('newAPITools', ['APITools'])
    .constant('newAPIConfig', {
        controller: '/api/NewsAPI',
    })
    .constant('newActions', {
        GetByFilterTermsAndSortParams: 'GetByFilterTermsAndSortParams',
        GetBylanguageID: 'GetBylanguageID',
    })
    .factory('newAPIService', ['newAPIConfig', 'newActions', 'APIService', '$q',
        function (newAPIConfig, newActions, APIService, $q) {

            return {

                GetByFilterTermsAndSortParams: function (filterTermsAndSortParams) {
                    var url = newAPIConfig.controller + "/" + newActions.GetByFilterTermsAndSortParams;
                    var data = filterTermsAndSortParams;
                    var httpMethod = CommonConstants.HttpMethods.Post;

                    return APIService.CallAPI(url, httpMethod, data);
                },

                GetBylanguageID: function (languageID) {

                    var url = newAPIConfig.controller + "/" + newActions.GetBylanguageID + "?languageID=" + languageID;
                    var data = undefined;
                    var httpMethod = CommonConstants.HttpMethods.Get;

                    return APIService.CallAPI(url, httpMethod, data);
                },
            };

        }]);


