# SearchAndSorted

## This is an object that API for search and sort and paging get :

```json
{
  "entityFilterTermsAndSortParams": {
    "pageIndex": 0,
    "pageSize": 0,
    "entityFilterTermList": [
      {
        "searchTerm": "string", //you can set property name like 'productName' or nameof(productName) .
        "searchValue": "string", //you can set property value like 'laptop lenovo ideapad 3' .
        "searchFilterOp": 0, //if you have filter , you must set this param for use in query dataBase
        "logicalOp": 0 //if you have one more filter , you need to set this param and your can use 'SearchFilterOps' enum for set .
      }
    ],
    "entitySortParamList": [
      {
        "sortField": "string",
        "sortDir": 0
      }
    ]
  }
}
```


``` csharp
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
```






![FIL](https://user-images.githubusercontent.com/45731341/223094619-df869664-d6ff-4ddd-a550-f0715a10a5f7.png)


## You can use the following enums to initialize the above object. It is completely readable :

![FIR](https://user-images.githubusercontent.com/45731341/223094807-b829ea46-9434-4790-bb56-108a7d2cbc1b.png)

