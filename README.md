# SearchAndSorted

## This is Csharp object that API for search and sort and paging get :

```csharp
public class EntityFilterTermsAndSortParams
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; }

    public List<EntityFilterTerm> EntityFilterTermList;

    public List<EntitySortParam> EntitySortParamList;

    public EntityFilterTermsAndSortParams(List<EntityFilterTerm> entityFilterTermList,
        List<EntitySortParam> entitySortParamList, int pageIndex, int pageSize)
    {

        EntityFilterTermList = entityFilterTermList;
        EntitySortParamList = entitySortParamList;
        PageIndex = pageIndex;
        PageSize = pageSize;
    }
}
```

## This is json object that API for search and sort and paging get :

```json
{
  "entityFilterTermsAndSortParams": {
    "pageIndex": 0,
    "pageSize": 0,
    "entityFilterTermList": [
      {
        "searchTerm": "string", //you can set property name like 'productName' or nameof(productName) .
        "searchValue": "string", //you can set property value like 'laptop lenovo ideapad 3' .
        "searchFilterOp": 0, //if you have filter , you must set this param for use in query dataBase and your can use 'LogicalOps' enum for set .
        "logicalOp": 0 //if you have one more filter , you need to set this param and your can use 'SearchFilterOps' enum for set .
      },
      // ...
    ],
    "entitySortParamList": [
      {
        "sortField": "string", //you can set property name like 'Id' or nameof(Id) .
        "sortDir": 0 //if you have sort param , you must set this param for use in query dataBase and your can use 'SortDir' enum for set .
      },
      // ...
    ]
  }
}
```

``` csharp
//Filter Param
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

//Filter Param
public enum LogicalOps
{
    And = 0,
    Or = 1,
    Not = 2,
}

//Sort Param
public enum SortDir
{
    Asc = 0,
    Desc = 1,
}

```
