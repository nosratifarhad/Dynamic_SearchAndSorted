# SearchAndSorted

this giving entity :

{
  "entityFilterTermsAndSortParams": {
    "pageIndex": 0,
    "pageSize": 0,
    "entityFilterTermList": [
      {
        "searchTerm": "string",//your can set property/dbField name
        "searchValue": "string",//your can set property/dbField value
        "searchFilterOp": 0, //your can use SearchFilterOps
        "logicalOp": 0 //your can use LogicalOps
      },...
    ],
    "entitySortParamList": [
      {
        "sortField": "string",//your can set property/dbField name
        "sortDir": 0 //your can use SortDir
      },...
    ]
  }
}

your can use this enums for up entity:

public enum SearchFilterOps
{
    Equal = 0,
    LessThan = 1,
    GreaterThan = 2,
    LessThanEqual = 3,
    GreaterThanEqual = 4,
    NotEqual = 5,
    Contains = 6,
    NotContains = 7,
    StartsWith = 8,
    EndsWith = 9,
}

public enum LogicalOps
{
    And = 0,
    Or = 1,
    Not = 2,
}

 public enum SortDir
  {
      Asc = 0,
      Desc = 1,
  }
