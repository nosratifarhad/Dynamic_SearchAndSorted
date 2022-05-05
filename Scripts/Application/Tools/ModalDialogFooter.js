angular.module('modalDialogFooter', [])
    .constant('modalDialogFooterConfig', {
        //addButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //editButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //deleteButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //cancelButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //okButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
    })
    .directive('ModalDialogFooter', ['modalDialogFooterConfig', function (modalDialogFooterConfig) {

        return {
            restrict: 'E',
            scope: {
                DialogHandler: "=",
                ShowModal: "=",
            },
            templateUrl: '/Content/Templates/Tools/ModalDialogFooter/modal-dialog-footer.html',
            replace: true,
            link: function (scope) {

                scope.dialogOk = function () {
                    scope.DialogHandler.dialogOk()
                };

                scope.dialogCancel = function (event) {
                    scope.DialogHandler.dialogCancel(event)
                };

            }
        };
    }]);