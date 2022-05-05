var CommonConstants = {

    FilterOps: {
        equal: 0, /*برابر*/
        lessThan: 1, /*کمتر از*/
        greaterThan: 2, /*بزرگتر از*/
        lessThanEqual: 3, /*کمتر از مساوی*/
        greaterThanEqual: 4, /*بزرگتر از برابر*/
        notEqual: 5, /*نا برابر*/
        contains: 6, /*حاوی*/
        notContains: 7, /*شامل نیست*/
    },

    logicalOps: { /*عملیات منطقی*/
        and: 0,
        or: 1,
        not: 2,
    },

    DataFormActionKind: {
        None: 0,
        Add: 1,
        Edit: 2,
        Delete: 3,
    },

    HttpMethods: {
        Get: 0,
        Post: 1,
    },
};