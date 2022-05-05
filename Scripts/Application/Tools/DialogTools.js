var DialogUIItems = /** @class */ (function () {

    function DialogUIItems(title) {
        this.title = title;
    }

    return DialogUIItems;
}());

angular.module('uiDialogTools', ['ui.bootstrap', 'ngAnimate'])
    .constant('uiDialogTypes', {
        error: 1,
        wait: 2,
        notify: 3,
        confirm: 4,
    })
    .constant('uiDialogTypesTitle', {
        error: 'خطا',
        wait: 'انتظار',
        notify: 'آگاهی',
        confirm: 'تایید',
    })
    .constant('uiDialogSizes', {
        small: 'sm',
        large: 'lg',
        medium: '',
    })
    .run(function ($templateCache) {
        $templateCache.put('TypedMessageModalDialog.html',
            '<div class="container body-content">' +
            '<div ng-app="uiDialogTools">' +
            '<div ng-controller="typedMessageController as $ctrl">' +
            '<div class="modal-header" ng-class="DialogHandler.dialogUIItems.titleClass" style="margin-left: -15px;margin-right: -15px;padding: 10px;">' +
            '<button type="button" class="close" data-dismiss="dialog" data-ng-click="DialogHandler.dialogCancel($event)">' +
            '<span aria-hidden="true">&times;</span>' +
            '<span class="sr-only">Close</span>' +
            '</button>' +
            '<h4 class="modal-title modal-message-title">{{ DialogHandler.dialogUIItems.title }}</h4>' +
            '</div>' +
            '<div class="modal-body" id="modal-body">' +
            '<fieldset class="modal-message-text">{{ DialogHandler.dialogUIItems.message }}</fieldset>' +
            '</div>' +
            '<div class="modal-footer" ng-show="DialogHandler.dialogUIItems.footerIsVisible">' +
            '<button class="btn btn-primary" type="button" ng-click="DialogHandler.dialogOk()" ' +
            'ng-show="DialogHandler.dialogUIItems.okButton.visible">' +
            '{{ DialogHandler.dialogUIItems.okButton.text }}' +
            '</button>' +
            '<button class="btn btn-warning" type="button" ng-click="DialogHandler.dialogCancel($event)" ' +
            'ng-show="DialogHandler.dialogUIItems.cancelButton.visible">' +
            '{{ DialogHandler.dialogUIItems.cancelButton.text }}' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div >' +
            '</div >');
    })
    .factory('DialogService', ['uiDialogTypes', 'uiDialogTypesTitle', '$uibModal', '$document',
        function (uiDialogTypes, uiDialogTypesTitle, $uibModal, $document) {

            return {

                getClassByDialogType: function (dialogType) {

                    //var cssClass = 'btn ';
                    var cssClass = '';

                    switch (dialogType) {
                        case uiDialogTypes.error:
                            cssClass += 'btn-danger';
                            break;
                        case uiDialogTypes.wait:
                            cssClass += 'btn-primary';
                            break;
                        case uiDialogTypes.notify:
                            cssClass += 'btn-success';
                            break;
                        case uiDialogTypes.confirm:
                            cssClass += 'btn-warning';
                            break;
                        default:
                            cssClass += 'btn-primary';
                            break;
                    }

                    return cssClass;
                },

                getTitleByDialogType: function (dialogType) {

                    var title = '';

                    switch (dialogType) {
                        case uiDialogTypes.error:
                            title = uiDialogTypesTitle.error;
                            break;
                        case uiDialogTypes.wait:
                            title = uiDialogTypesTitle.wait;
                            break;
                        case uiDialogTypes.notify:
                            title = uiDialogTypesTitle.notify;
                            break;
                        case uiDialogTypes.confirm:
                            title = uiDialogTypesTitle.confirm;
                            break;
                        default:
                            title = '';
                            break;
                    }

                    return title;
                },

                getDialogParentElement: function (parentSelector) {

                    var parentElem = parentSelector ?
                        angular.element($document[0].querySelector(parentSelector)) : undefined;

                    return parentElem;
                },

                //openModalDialog: function (size, parentSelector, modalAnimationsEnabled, dialogTemplateUrl,
                //    closeOnEscapeKey, dialogUIItems, 
                //    onSuccessHandler, onDismissHandler) {

                //    //var parentElem = parentSelector ?
                //    //    angular.element($document[0].querySelector(parentSelector)) : undefined;

                //    var modalInstance = $uibModal.open({
                //        animation: modalAnimationsEnabled,
                //        ariaLabelledBy: 'modal-title',
                //        ariaDescribedBy: 'modal-body',
                //        templateUrl: dialogTemplateUrl,
                //        //controller: 'controlUserController',
                //        //controllerAs: '$ctrl',
                //        size: size,
                //        //windowTopClass: 'btn btn-primary',
                //        //windowClass: 'btn btn-primary',
                //        keyboard: closeOnEscapeKey,
                //        appendTo: this.getDialogParentElement(parentSelector),
                //        controller: function ($scope) {

                //            //$scope.dialogUIItems = {
                //            //        dialogUIItems: {
                //            //            Title: 'XXXX'
                //            //        }
                //            //};

                //            //$scope.dialogUIItems = new DialogUIItems('XXXX');

                //            $scope.dialogUIItems = dialogUIItems;

                //        }
                //        //resolve: {
                //        //    dialogUIItems: function () {
                //        //        return dialogUIItems;
                //        //    }
                //        //}
                //    });

                openModalDialog: function (dialogOptions) {

                    //var parentElem = parentSelector ?
                    //    angular.element($document[0].querySelector(parentSelector)) : undefined;

                    var modalInstance = $uibModal.open({
                        animation: dialogOptions.modalAnimationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: dialogOptions.dialogTemplateUrl,
                        //controller: 'controlUserController',
                        //controllerAs: '$ctrl',
                        size: dialogOptions.size,
                        //windowTopClass: 'btn btn-primary',
                        //windowClass: 'btn btn-primary',
                        //keyboard: dialogOptions.closeOnEscapeKey,
                        //appendTo: this.getDialogParentElement(dialogOptions.parentSelector),
                        controller: function ($scope) {

                            //$scope.dialogUIItems = {
                            //        dialogUIItems: {
                            //            Title: 'XXXX'
                            //        }
                            //};

                            //$scope.dialogUIItems = new DialogUIItems('XXXX');

                            $scope.dialogUIItems = dialogOptions.dialogUIItems;

                        }
                        //resolve: {
                        //    dialogUIItems: function () {
                        //        return dialogUIItems;
                        //    }
                        //}
                    });

                    modalInstance.result.then(function (selectedItem) {
                        dialogOptions.onSuccessHandler(selectedItem);
                    }, function (selectedItem) {
                        dialogOptions.onDismissHandler();
                    });


                },

                getTypedModalDialogUIItems: function (dialogType, dialogMessage) {

                    return {
                        dialogUIItems: {
                            message: dialogMessage,
                            title: this.getTitleByDialogType(dialogType),
                            titleClass: this.getClassByDialogType(dialogType),
                            footerIsVisible: true,
                            okButton: {
                                text: (dialogType == uiDialogTypes.confirm ? 'بلی' : 'تایید'),
                                visible: (dialogType == uiDialogTypes.confirm),
                            },
                            cancelButton: {
                                text: (dialogType == uiDialogTypes.confirm ? 'خیر' : 'بستن'),
                                visible: true,
                            },
                        }
                    };

                },

                openTypedModalDialog: function (typedDialogOptions) {

                    var dialogOptions = this.getTypedModalDialogUIItems(typedDialogOptions.dialogType, typedDialogOptions.dialogMessage);

                    this.openModalDialog({
                        size: typedDialogOptions.size,
                        parentSelector: typedDialogOptions.parentSelector,
                        modalAnimationsEnabled: typedDialogOptions.modalAnimationsEnabled,
                        //dialogTemplateUrl: '/Tools/TypedMessage?showModal=1',
                        dialogTemplateUrl: 'TypedMessageModalDialog.html',
                        closeOnEscapeKey: true,
                        dialogUIItems: this.getTypedModalDialogUIItems(typedDialogOptions.dialogType, typedDialogOptions.dialogMessage).dialogUIItems,
                        onSuccessHandler: typedDialogOptions.onSuccessHandler,
                        onDismissHandler: typedDialogOptions.onDismissHandler
                    });


                },


            };

        }])
    .controller('typedMessageController', ['$scope', function ($scope) {


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