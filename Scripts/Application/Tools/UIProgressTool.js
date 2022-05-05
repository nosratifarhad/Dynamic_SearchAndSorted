angular.module('uiProgressTool', [])
    .constant('UIProgressConfig', {
        addButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
    })
    .directive('UIProgress', ['UIProgressConfig', function (UIProgressConfig) {

        return {
            restrict: 'E',
            scope: {
                uiLockTools: "=",
            },

            templateUrl: '/Content/Templates/uiProgressTool/ui-progress.html',
            replace: true,
            link: function (scope) {

                //alert(scope.uiLockTools.needslockUI);

                //$scope.$watch('IsInRequest', function (newVal) {
                //    alert(newVal);
                //});

            }
        };
    }]);