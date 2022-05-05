angular.module('APITools', [])
    .constant('apiConfig', {
        timeOutOnDataFetch: 0,
    })
    .factory('APIService', ['apiConfig', '$http', '$q', function (apiConfig, $http, $q) {

        return {

            CallAPI: function (url, httpMethod, data) {

                switch (httpMethod) {

                    case CommonConstants.HttpMethods.Get:

                        return $q(function (resolve, reject) {

                            setTimeout(function () {

                                $http.get(url)
                                    .then(function (response) {
                                        resolve(response.data);
                                    }, function (data, status) {
                                        reject({ data, status });
                                    });

                            }, apiConfig.timeOutOnDataFetch);

                        });

                        break;
                    case CommonConstants.HttpMethods.Post:
                        return $q(function (resolve, reject) {

                            setTimeout(function () {

                                $http.post(url, JSON.stringify(data))
                                    .then(function (response) {
                                        resolve(response.data);
                                    }, function (data, status) {
                                        reject({ data, status });
                                    });

                            }, apiConfig.timeOutOnDataFetch);

                        });
                        break;
                    default:
                        alert("Invalid Http Method");
                }

            },

        };

    }]);