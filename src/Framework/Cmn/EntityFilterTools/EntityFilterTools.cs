﻿using System.Reflection;
using System.Text;

namespace SearchAndSort.Core.Framework.Cmn.EntityFilterTools
{
    public class EntityFilterTools
    {

        public const string WHERE = " WHERE ";
        public const string ORDERBY = " ORDER BY ";

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

        public static string GetSearchFilterTermWhereClauseWithEntityFrameWork<T>(EntityFilterTools.EntityFilterTerm filterTerm)
        {
            StringBuilder strWhere = new StringBuilder();

            PropertyInfo propertyInfo = EntityTools.EntityTools.GetClassParameter<T>(filterTerm.SearchTerm);

            if (propertyInfo != null)
            {
                Type propertyType = propertyInfo.PropertyType;

                if (propertyType == typeof(String))
                    filterTerm.SearchValue = "\"" + filterTerm.SearchValue + "\"";

                switch (filterTerm.SearchFilterOp)
                {
                    case EntityFilterTools.SearchFilterOps.Equal:
                        if (propertyType == typeof(String))
                            strWhere.Append(filterTerm.SearchTerm + ".Equals(" + filterTerm.SearchValue + ")");
                        else
                            strWhere.Append(filterTerm.SearchTerm + " = " + filterTerm.SearchValue);
                        break;
                    case EntityFilterTools.SearchFilterOps.NotEqual:
                        strWhere.Append(filterTerm.SearchTerm + " <> " + filterTerm.SearchValue);
                        break;
                    case EntityFilterTools.SearchFilterOps.Contains:
                        strWhere.Append(filterTerm.SearchTerm + ".Contains(" + filterTerm.SearchValue + ")");
                        break;
                    case EntityFilterTools.SearchFilterOps.NotContains:
                        strWhere.Append("!" + filterTerm.SearchTerm + ".Contains(" + filterTerm.SearchValue + ")");
                        break;
                    case EntityFilterTools.SearchFilterOps.StartsWith:
                        strWhere.Append(filterTerm.SearchTerm + ".StartsWith(" + filterTerm.SearchValue + ")");
                        break;
                    case EntityFilterTools.SearchFilterOps.EndsWith:
                        strWhere.Append(filterTerm.SearchTerm + ".StartsWith(" + filterTerm.SearchValue + ")");
                        break;
                    case EntityFilterTools.SearchFilterOps.GreaterThan:
                        strWhere.Append(filterTerm.SearchTerm + " > " + filterTerm.SearchValue);
                        break;
                    case EntityFilterTools.SearchFilterOps.GreaterThanEqual:
                        strWhere.Append(filterTerm.SearchTerm + " >= " + filterTerm.SearchValue);
                        break;
                    case EntityFilterTools.SearchFilterOps.LessThan:
                        strWhere.Append(filterTerm.SearchTerm + " < " + filterTerm.SearchValue);
                        break;
                    case EntityFilterTools.SearchFilterOps.LessThanEqual:
                        strWhere.Append(filterTerm.SearchTerm + " <= " + filterTerm.SearchValue);
                        break;
                }

                return strWhere.ToString();
            }

            return "";
        }

        public static string GetSearchFilterTermWhereClauseWithDappr<T>(EntityFilterTools.EntityFilterTerm filterTerm)
        {
            StringBuilder strWhere = new StringBuilder();

            PropertyInfo propertyInfo = EntityTools.EntityTools.GetClassParameter<T>(filterTerm.SearchTerm);

            if (propertyInfo != null)
            {
                Type propertyType = propertyInfo.PropertyType;

                if (propertyType == typeof(String))
                    filterTerm.SearchValue = "\'" + filterTerm.SearchValue + "\'";

                switch (filterTerm.SearchFilterOp)
                {
                    case EntityFilterTools.SearchFilterOps.Equal:
                        if (propertyType == typeof(String))
                            strWhere.Append($"{filterTerm.SearchTerm} LIKE ({filterTerm.SearchValue})");
                        else
                            strWhere.Append($"{filterTerm.SearchTerm} = {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.NotEqual:
                        strWhere.Append($"{filterTerm.SearchTerm} <> {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.Contains:
                        strWhere.Append($"{filterTerm.SearchTerm} IN {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.NotContains:
                        strWhere.Append($"{filterTerm.SearchTerm} NOT IN {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.StartsWith:
                        strWhere.Append($"{filterTerm.SearchTerm} LIKE {filterTerm.SearchValue}%");
                        break;
                    case EntityFilterTools.SearchFilterOps.EndsWith:
                        strWhere.Append($"{filterTerm.SearchTerm} LIKE %{filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.GreaterThan:
                        strWhere.Append($"{filterTerm.SearchTerm} > {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.GreaterThanEqual:
                        strWhere.Append($"{filterTerm.SearchTerm} >= {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.LessThan:
                        strWhere.Append($"{filterTerm.SearchTerm} < {filterTerm.SearchValue}");
                        break;
                    case EntityFilterTools.SearchFilterOps.LessThanEqual:
                        strWhere.Append($"{filterTerm.SearchTerm} <= {filterTerm.SearchValue}");

                        break;
                }

                return strWhere.ToString();
            }
            return "";
        }

        public class EntityFilterTerm
        {
            public string SearchTerm { get; set; }
            public string SearchValue { get; set; }
            public SearchFilterOps SearchFilterOp { get; set; }
            public LogicalOps LogicalOp { get; set; }

            public EntityFilterTerm(string searchTerm, string searchValue, SearchFilterOps searchFilterOp, LogicalOps logicalOp)
            {
                SearchTerm = searchTerm;
                SearchValue = searchValue;
                SearchFilterOp = searchFilterOp;
                LogicalOp = logicalOp;
            }
        }

        public class EntitySortParam
        {
            public string SortField { get; set; }
            public SortDir SortDir { get; set; }

            public EntitySortParam(string sortField, SortDir sortDir)
            {
                SortField = sortField;
                SortDir = sortDir;
            }
        }

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
    }
}
