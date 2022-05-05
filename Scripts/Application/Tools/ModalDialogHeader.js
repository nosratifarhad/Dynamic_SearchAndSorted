angular.module('modalDialogHeader', [])
    .constant('modalDialogHeaderConfig', {
        //addButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //editButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //deleteButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //cancelButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
        //okButtonImage: "/Content/Images/Tools/ActionButtons/Add.png",
    })
    .directive('ModalDialogHeader', ['modalDialogHeaderConfig', function (modalDialogHeaderConfig) {

        return {
            restrict: 'E',
            scope: {
                DialogHandler: "=",
                ShowModal: "=",
            },
            templateUrl: '/Content/Templates/Tools/ModalDialogHeader/modal-dialog-header.html',
            replace: true,
            link: function (scope) {

                scope.dialogCancel = function (event) {
                    scope.DialogHandler.dialogCancel(event)
                };
            }
        };
    }]);