angular.module('HierarchicalDataTools', [])
    .constant('hierarchicalDataConfig', {
        //timeOutOnDataFetch: 0,
    })
    .factory('HierarchicalDataService', ['hierarchicalDataConfig', function (hierarchicalDataConfig) {

        return {

            ConvertFlatDataToHierarchicalDataConfig: function (flatData, parentFieldName, rootParentValue, keyFieldName, childrenFieldName) {

                if (childrenFieldName == undefined)
                    childrenFieldName = 'children';

                    var roots = [] // things without parent

                    var all = {}

                    flatData.forEach(function (item) {
                        item[childrenFieldName] = [];
                        all[item[keyFieldName]] = item
                    })

                    // connect childrens to its parent, and split roots apart
                    Object.keys(all).forEach(function (keyFieldName) {
                        var item = all[keyFieldName]
                        if (item[parentFieldName] === rootParentValue) {
                            roots.push(item)
                        } else if (item[parentFieldName] in all) {
                            var p = all[item[parentFieldName]]
                            if (!(childrenFieldName in p)) {
                                p[childrenFieldName] = []
                            }
                            p[childrenFieldName].push(item)
                        }
                    })

                    return roots
            },

        };

    }]);