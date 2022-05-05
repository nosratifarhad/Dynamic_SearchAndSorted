//---------Question--------//
var QuestionConsts = {

    questionHash:
    [
        { question: '0', label: '', active: false },
        { question: 'ضعیف', label: 'ضعیف', active: true },
        { question: 'متوسط', label: 'متوسط', active: true },
        { question: 'خوب', label: 'خوب', active: true },
        { question: 'عالی', label: 'عالی', active: true },
    ],
};

function mapQuestion() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return QuestionConsts.questionHash[input].label;
        }
    };
}
//---------END---------//
//---------Gender--------//
var GenderConsts = {

    genderHash:
    [
        { gender: '0', label: '', active: false },
        { gender: 'اقا', label: 'اقا', active: true },
        { gender: 'خانوم', label: 'خانوم', active: true },
    ],
};

function mapGender() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return GenderConsts.genderHash[input].label;
        }
    };
}
//---------END---------//
//---------MaritalStatus--------//
var MaritalStatusConsts = {

    maritalStatusHash:
    [
        { maritalStatus: '0', label: '', active: false },
        { maritalStatus: 'مجرد', label: 'مجرد', active: true },
        { maritalStatus: 'متاهل', label: 'متاهل', active: true },
    ],
};

function mapMaritalStatus() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return MaritalStatusConsts.maritalStatusHash[input].label;
        }
    };
}
//---------END---------//
//---------taskSystem--------//
var TaskSystemConsts = {

    taskSystemHash:
    [
        { taskSystem: '0', label: '', active: false },
        { taskSystem: 'دارای کارت پایان خدمت', label: 'دارای کارت پایان خدمت', active: true },
        { taskSystem: 'معافیت پزشکی', label: 'معافیت پزشکی', active: true },
        { taskSystem: 'معافیت غیرپزشکی', label: 'معافیت غیرپزشکی', active: true },
        { taskSystem: 'معافیت تحصیلی', label: 'معافیت تحصیلی', active: true },
        { taskSystem: 'مشمول', label: 'مشمول', active: true },
        { taskSystem: 'سایر', label: 'سایر', active: true },
    ],
};

function mapTaskSystem() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return TaskSystemConsts.taskSystemHash[input].label;
        }
    };
}
//---------END---------//
//---------areasOfActivity--------//
var AreasOfActivityConsts = {

    areasOfActivityHash:
    [
        { areasOfActivity: '0', label: '', active: false },
        { areasOfActivity: 'اداری و پشتیبانی', label: 'اداری و پشتیبانی', active: true },
        { areasOfActivity: 'انبارداری', label: 'انبارداری', active: true },
        { areasOfActivity: 'بازاریابی', label: 'بازاریابی', active: true },
        { areasOfActivity: 'بازرگانی ، خرید و تدارکات داخلی', label: 'بازرگانی ، خرید و تدارکات داخلی', active: true },
        { areasOfActivity: 'برنامه ریزی استراتژیک', label: 'برنامه ریزی استراتژیک', active: true },
        { areasOfActivity: 'تحصیلداری', label: 'تحصیلداری', active: true },
        { areasOfActivity: 'تعمیر و نگهداری', label: 'تعمیر و نگهداری', active: true },
        { areasOfActivity: 'تولید / کارخانه', label: 'تولید / کارخانه', active: true },
        { areasOfActivity: 'حقوقی', label: 'حقوقی', active: true },
        { areasOfActivity: 'خدمات و نظافتی', label: 'خدمات و نظافتی', active: true },
        { areasOfActivity: 'راننده', label: 'راننده', active: true },
        { areasOfActivity: 'روابط عمومی', label: 'روابط عمومی', active: true },
        { areasOfActivity: 'سخت افرار و شبکه', label: 'سخت افرار و شبکه', active: true },
        { areasOfActivity: 'سیستم ها ، فرآیندها و بهبود روش ها', label: 'سیستم ها ، فرآیندها و بهبود روش ها', active: true },
        { areasOfActivity: 'طرح و برنامه ریزی', label: 'طرح و برنامه ریزی', active: true },
        { areasOfActivity: 'فروش', label: 'فروش', active: true },
        { areasOfActivity: 'فروشندگی و ویزیتوری', label: 'فروشندگی و ویزیتوری', active: true },
        { areasOfActivity: 'قائم مقام مدیرعامل', label: 'قائم مقام مدیرعامل', active: true },
        { areasOfActivity: 'کنترل کیفیت', label: 'کنترل کیفیت', active: true },
        { areasOfActivity: 'گرافیک و طراحی', label: 'گرافیک و طراحی', active: true },
        { areasOfActivity: 'مترجمی', label: 'مترجمی', active: true },
        { areasOfActivity: 'مدیریت و کنترل پروژه', label: 'مدیریت و کنترل پروژه', active: true },
        { areasOfActivity: 'مدیرعامل', label: 'مدیرعامل', active: true },
        { areasOfActivity: 'منابع انسانی', label: 'منابع انسانی', active: true },
        { areasOfActivity: 'منشی و مسئول دفتری', label: 'منشی و مسئول دفتری', active: true },
        { areasOfActivity: 'مهندسی', label: 'مهندسی', active: true },
        { areasOfActivity: 'نرم افزار و برنامه نویسی تحت ویندوز', label: 'نرم افزار و برنامه نویسی تحت ویندوز', active: true },
        { areasOfActivity: 'نگهبانی', label: 'نگهبانی', active: true },
        { areasOfActivity: 'برنامه نویسی و طراحی وب', label: 'برنامه نویسی و طراحی وب', active: true },
        { areasOfActivity: 'تحقیق و توسعه', label: 'تحقیق و توسعه', active: true },
        { areasOfActivity: 'مالی و حسابداری', label: 'مالی و حسابداری', active: true },
    ],
};

function mapAreasOfActivity() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return AreasOfActivityConsts.areasOfActivityHash[input].label;
        }
    };
}
//---------END---------//
//---------documentEducation--------//
var DocumentEducationConsts = {

    documentEducationHash:
    [
        { documentEducation: '0', label: '', active: false },
        { documentEducation: 'دیپلم و یا پایین تر', label: 'دیپلم و یا پایین تر', active: true },
        { documentEducation: 'فوق دیپلم', label: 'فوق دیپلم', active: true },
        { documentEducation: 'لیسانس', label: 'لیسانس', active: true },
        { documentEducation: 'فوق لیسانس', label: 'فوق لیسانس', active: true },
        { documentEducation: 'دکتری', label: 'دکتری', active: true },
    ],
};

function mapDocumentEducation() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return DocumentEducationConsts.documentEducationHash[input].label;
        }
    };
}
//---------END---------//
//---------typeCityEducation--------//
var TypeCityEducationConsts = {

    typeCityEducationHash:
    [
        { typeCityEducation: '0', label: '', active: false },
        { typeCityEducation: 'دبیرستان دولتی', label: 'دبیرستان دولتی', active: true },
        { typeCityEducation: 'تیزهوشان', label: 'تیزهوشان', active: true },
        { typeCityEducation: 'نمونه دولتی', label: 'نمونه دولتی', active: true },
        { typeCityEducation: 'موسسه غیرانتفاعی', label: 'موسسه غیرانتفاعی', active: true },
        { typeCityEducation: 'خارج از کشور', label: 'خارج از کشور', active: true },
        { typeCityEducation: 'فنی و حرفه ای', label: 'فنی و حرفه ای', active: true },
        { typeCityEducation: 'کاردانش', label: 'کاردانش', active: true },
    ],
};

function mapTypeCityEducation() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return TypeCityEducationConsts.typeCityEducationHash[input].label;
        }
    };
}
//---------END---------//
//---------organizationalLevel--------//
var OrganizationalLevelConsts = {

    organizationalLevelHash:
    [
        { organizationalLevel: '0', label: '', active: false },
        { organizationalLevel: 'مدیرعامل', label: 'مدیرعامل', active: true },
        { organizationalLevel: 'معاونت', label: 'معاونت', active: true },
        { organizationalLevel: 'مدیر', label: 'مدیر', active: true },
        { organizationalLevel: 'رئیس', label: 'رئیس', active: true },
        { organizationalLevel: 'مسئول ، سرپرست', label: 'مسئول ، سرپرست', active: true },
        { organizationalLevel: 'کارشناس', label: 'کارشناس', active: true },
        { organizationalLevel: 'فروشنده', label: 'فروشنده', active: true },
        { organizationalLevel: 'تکنسین ، کاردان', label: 'تکنسین ، کاردان', active: true },
        { organizationalLevel: 'کارگر', label: 'کارگر', active: true },
        { organizationalLevel: 'کارمند', label: 'کارمند', active: true },
    ],
};

function mapOrganizationalLevel() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return OrganizationalLevelConsts.organizationalLevelHash[input].label;
        }
    };
}
//---------END---------//
//---------LanguageAbility---------//
var LanguageAbilityConsts = {

    languageAbilityHash:
    [
        { languageAbility: '0', label: '', active: false },
        { languageAbility: 'ضعیف', label: 'ضعیف', active: true },
        { languageAbility: 'خوب', label: 'خوب', active: true },
        { languageAbility: 'متوسط', label: 'متوسط', active: true },
        { languageAbility: 'عالی', label: 'عالی', active: true },
    ],
};

function mapLanguageAbility() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return LanguageAbilityConsts.languageAbilityHash[input].label;
        }
    };
}
//---------END---------//
//---------OfficeAbility---------//
var OfficeAbilityConsts = {

    officeAbilityHash:
    [
        { officeAbility: '0', label: '', active: false },
        { officeAbility: 'ضعیف', label: 'ضعیف', active: true },
        { officeAbility: 'خوب', label: 'خوب', active: true },
        { officeAbility: 'متوسط', label: 'متوسط', active: true },
        { officeAbility: 'عالی', label: 'عالی', active: true },
    ],
};

function mapOfficeAbility() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return OfficeAbilityConsts.officeAbilityHash[input].label;
        }
    };
}
//---------END---------//
//---------cooperationInTheForm---------//
var CooperationInTheFormConsts = {

    cooperationInTheFormHash:
    [
        { cooperationInTheForm: '0', label: '', active: false },
        { cooperationInTheForm: 'تمام وقت', label: 'تمام وقت', active: true },
        { cooperationInTheForm: 'پاره وقت / ساعتی', label: 'پاره وقت / ساعتی', active: true },
        { cooperationInTheForm: 'پروژه ای', label: 'پروژه ای', active: true },
        { cooperationInTheForm: 'مشاوره ای', label: 'مشاوره ای', active: true },
    ],
};

function mapCooperationInTheForm() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return CooperationInTheFormConsts.cooperationInTheFormHash[input].label;
        }
    };
}
//---------END---------//
//---------fettingToKnow---------//
var FettingToKnowConsts = {

    fettingToKnowHash:
    [
        { fettingToKnow: '0', label: '', active: false },
        { fettingToKnow: 'آگهي روزنامه', label: 'آگهي روزنامه', active: true },
        { fettingToKnow: 'وب سايت هاي استخدامي', label: 'وب سايت هاي استخدامي', active: true },
        { fettingToKnow: 'تبليغات محيطي', label: 'تبليغات محيطي', active: true },
        { fettingToKnow: 'آگهي در دانشگا ها', label: 'آگهي در دانشگا ها', active: true },
        { fettingToKnow: 'معرفي دوستان', label: 'معرفي دوستان', active: true },
        { fettingToKnow: 'مراكز كاريابي', label: 'مراكز كاريابي', active: true },
        { fettingToKnow: 'سازمان فني و حرفه اي', label: 'سازمان فني و حرفه اي', active: true },
        { fettingToKnow: 'مراجعه آزاد', label: 'مراجعه آزاد', active: true },
        { fettingToKnow: 'ساير', label: 'ساير', active: true },
    ],
};

function mapFettingToKnow() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return FettingToKnowConsts.fettingToKnowHash[input].label;
        }
    };
}
//---------END---------//
//---------Tagrobe---------//
var TagrobeConsts = {

    TagrobeHash:
    [
        { Tagrobe: '0', label: '', active: false },
        { Tagrobe: 'دارم', label: 'دارم', active: true },
        { Tagrobe: 'ندارم', label: 'ندارم', active: true },
    ],
};

function mapTagrobe() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return TagrobeConsts.TagrobeHash[input].label;
        }
    };
}
//---------END---------//
//---------Massage//---------Tagrobe---------//
var MassageConsts = {

    MassageHash:
    [
        { Massage: '0', label: '', active: false },
        { Massage: 'پیامک', label: 'پیامک', active: true },
        { Massage: 'ایمیل', label: 'ایمیل', active: true },
        { Massage: 'هر دو', label: 'هر دو', active: true },
    ],
};

function mapMassage() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return MassageConsts.MassageHash[input].label;
        }
    };
}
//---------END---------//---------//
//---------Massage//---------Tagrobe---------//
var SeezConsts = {

    SeezHash:
    [
        { seez: '0', label: '', active: false },
        { seez: 'کوچک', label: 'کوچک', active: true },
        { seez: 'بزرگ', label: 'بزرگ', active: true },
        { seez: 'متوسط', label: 'متوسط', active: true },
    ],
};

function mapSeez() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return SeezConsts.SeezHash[input].label;
        }
    };
}
//---------END---------//---------//
//------------------activityType---------//
var ActivityTypeConsts = {

    activityTypeHash:
    [
        { activityType: '0', label: '', active: false },
        { activityType: 'لباس', label: 'لباس', active: true },
        { activityType: 'اکسسوری', label: 'اکسسوری', active: true },
        { activityType: 'لوازم خانگی', label: 'لوازم خانگی', active: true },
        { activityType: 'ورزشی', label: 'ورزشی', active: true },
        { activityType: 'کیف و کفش', label: 'کیف و کفش', active: true },
        { activityType: 'غذا', label: 'غذا', active: true },
        { activityType: 'سایر', label: 'سایر', active: true },
    ],
};

function mapActivityType() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return ActivityTypeConsts.activityTypeHash[input].label;
        }
    };
}
//---------END---------//---------//
//---------Question--------//
var GesmatConsts = {

    gesmatHash:
    [
        { gesmat: '0', label: '', active: false },
        { gesmat: 'آقایان', label: 'آقایان', active: true },
        { gesmat: 'بانوان', label: 'بانوان', active: true },
    ],
};

function mapGesmat() {

    return function (input) {
        if (!input) {
            return '';
        } else {
            return GesmatConsts.gesmatHash[input].label;
        }
    };
}
//---------END---------//