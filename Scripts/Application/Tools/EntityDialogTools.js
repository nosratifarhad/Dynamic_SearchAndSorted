angular.module('uiEntityDialogTools', ['uiDialogTools'])
    .constant('uiEntityDialogTypes', {
        EntityAddedSuccessFully: 1,
        EntityAddError: 2,
        EntityEditededSuccessFully: 3,
        EntityEditError: 4,
        EntityDeleteConfirm: 5,
        EntityDeletedSuccessFully: 6,
        EntityDeleteError: 7,
        EntityRegesterSuccessFully: 8,
        EntityRegesterError: 9,
        EntityForgotPassSuccessFully: 10,
        EntityForgotPassError: 11,
        EntityLoginSuccessFully: 12,
        EntityLoginError: 13,
        EntityInValidPasswordError: 14,
        EntityInValidRecaptchaError: 15,
        EntityInValidFileUploadError: 16,
        EntityFileUploadSuccessFully: 17,
        EntityMasageSuccessFully: 18,
        EntityMasageError: 19,

        EntityNewsSearchTagError: 20,

        EntityStatusSuccessFully: 21,
        EntityStatusError: 22,
        EntityBookMarkError: 23,
        EntityGetError: 23,
    })
    .constant('modalEntityDialogConfig', {
        modalAnimationsEnabled: true,
        modalArea: '.modalDialogSection .modal-area',
    })
    .constant('modalEntityDialogCommonMessagesConfig', {
        dataAddedSuccessfullyMsg: 'اطلاعات ثبت گردید.',
        dataAddedErrorMsg: 'اشکالی در ثبت اطلاعات بوجود آمد.',
        dataEditedSuccessfullyMsg: 'اطلاعات ویرایش گردید.',
        dataEditedErrorMsg: 'اشکالی در ویرایش اطلاعات بوجود آمد.',
        deleteConfirmMsg: 'آیا مایل به حذف اطلاعات هستید؟',
        dataDeletedSuccessfullyMsg: 'اطلاعات حذف گردید.',
        dataDeletedErrorMsg: 'اشکالی در حذف اطلاعات بوجود آمد.',
        dataRegesterSuccessfullyMsg: 'کاربر گرامی : پیامی حاوی لینک فعال سازی برای ایمیل شماارسال گردید ، لطفا وارد ایمیل خود شده و لر روی لینک کلیک کنید .',
        dataRegesterErrorMsg: 'ایمیل وارد شده قبلا ثبت گردیده است',
        dataForgotPassSuccessfullyMsg: 'ایمیلی حاوی لینک امنیتی برای ایمیلتان ارسال گردید ، لطفا وارد ایمیل خود شده و بر روی لینک کلیک کنید .',
        dataForgotPassErrorMsg: 'ایمیل وارد شده یافت نشد',
        dataLoginSuccessfullyMsg: 'خوش آمدید',
        dataLoginErrorMsg: 'کاربر گرامی : حساب کاربری شما غیر فعال است',
        dataInValidPasswordrMsg: 'کاربر گرامی : کلمه ی عبور و یا ایمیل وارد شده صحیح نمی باشد',
        dataInValidRecaptchaMsg: 'لطفا هویت خود را تایید کنید',
        dataInValidFileUploadMsg: 'کاربر گرامی لطفا فایل ارسالی را با پسوند pdf و یا word ارسال کنید',
        dataFileUploadMsg: 'فایل با موفقیت ارسال شد',
        dataMasageMsg: 'پیام با موفقیت ارسال شد',
        dataInValidMasageMsg: 'اشکال در ارسال پیام به وجود آمد ، لطفا مجدد تلاش کنید',

        dataInValidNewsSearchTagMsg: 'متاسفانه خبری با تگ جستجو شده یافت نشد',

        dataStatusSuccessfullyMsg: 'با تشکر از مهربانی شما : کاربر گرامی مبلغ با موفقیت واریز شد . اطلاعات تکمیلی برای شماره تماس شما پیامک میشود',
        dataStatusErrorMsg: 'خطا در ارتباط با بانک . لطفا مجدد تالش کنید',
        dataBookMarkErrorMsg: 'کاربر گرامی لطفا وارد حساب کاربری خود شوید',
        dataGetErrorMsg: 'مشکل ارتباط با بانک',
    })
    .factory('EntityDialogService', ['DialogService', 'uiDialogTypes', 'uiDialogTypesTitle', 'uiDialogSizes', 'uiEntityDialogTypes', 'modalEntityDialogConfig', 'modalEntityDialogCommonMessagesConfig',
        function (DialogService, uiDialogTypes, uiDialogTypesTitle, uiDialogSizes, uiEntityDialogTypes, modalEntityDialogConfig, modalEntityDialogCommonMessagesConfig) {

            return {

                openEntityModalDialog: function (entityDialogOptions) {

                    var dialogType = uiDialogTypes.error;
                    var dialogMessage = 'Not Set!';

                    switch (entityDialogOptions.entityDialogType) {
                        case uiEntityDialogTypes.EntityAddedSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataAddedSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityAddError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataAddedErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityEditededSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataEditedSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityEditError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataEditedErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityDeleteConfirm:
                            dialogType = uiDialogTypes.confirm;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.deleteConfirmMsg;
                            break;
                        case uiEntityDialogTypes.EntityDeletedSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataDeletedSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityDeleteError:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataDeletedErrorMsg;
                            break;
//----
                        case uiEntityDialogTypes.EntityRegesterSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataRegesterSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityRegesterError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataRegesterErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityForgotPassSuccessFully:
                            dialogType = uiDialogTypes.confirm;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataForgotPassSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityForgotPassError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataForgotPassErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityLoginSuccessFully:
                            dialogType = uiDialogTypes.confirm;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataLoginSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityLoginError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataLoginErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityInValidPasswordError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataInValidPasswordrMsg;
                            break;
                        case uiEntityDialogTypes.EntityInValidRecaptchaError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataInValidRecaptchaMsg;
                            break;
                        case uiEntityDialogTypes.EntityInValidFileUploadError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataInValidFileUploadMsg;
                            break;
                        case uiEntityDialogTypes.EntityFileUploadSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataFileUploadMsg;
                            break;

                        case uiEntityDialogTypes.EntityMasageError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataInValidMasageMsg;
                            break;
                        case uiEntityDialogTypes.EntityMasageSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataMasageMsg;
                            break;

                        case uiEntityDialogTypes.EntityNewsSearchTagError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataInValidNewsSearchTagMsg;
                            break;

                        case uiEntityDialogTypes.EntityStatusSuccessFully:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataStatusSuccessfullyMsg;
                            break;
                        case uiEntityDialogTypes.EntityStatusError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataStatusErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityBookMarkError:
                            dialogType = uiDialogTypes.notify;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataBookMarkErrorMsg;
                            break;
                        case uiEntityDialogTypes.EntityGetError:
                            dialogType = uiDialogTypes.error;
                            dialogMessage = modalEntityDialogCommonMessagesConfig.dataGetErrorMsg;
                            break;
                    }

                    DialogService.openTypedModalDialog({
                        dialogType: dialogType, dialogMessage: dialogMessage,
                        size: uiDialogSizes.small, parentSelector: modalEntityDialogConfig.modalArea, modalAnimationsEnabled: modalEntityDialogConfig.modalAnimationsEnabled,
                        onSuccessHandler: entityDialogOptions.onSuccessHandler,
                        onDismissHandler: entityDialogOptions.onDismissHandler,
                    });

                },


            };

        }]);
