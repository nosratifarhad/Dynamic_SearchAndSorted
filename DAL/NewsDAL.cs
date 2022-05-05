using SearchAndSort.Core.Cmn;
using SearchAndSort.Core.Cmn.EntityFilterTools;
using SearchAndSort.Core.Cmn.EntityTools;
using SearchAndSort.DataBase;
using SearchAndSort.Extensions;
using SearchAndSort.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SearchAndSort.DAL
{
    public class NewsDAL
    {
        MyDbContext db = new MyDbContext();
        public IPagedList<NewsModel> SearchPostByFilterTermsAndSortParamsAsync(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            string strWhere = string.Empty;
            string strOrderBy = string.Empty;

            foreach (var filterTerm in entityFilterTermsAndSortParams.EntityFilterTermList)
                if (!string.IsNullOrEmpty(filterTerm.SearchTerm))
                {
                    string filterTermWhereClause = EntityFilterTools.GetSearchFilterTermWhereClause<Tbl_News>(filterTerm);

                    if (!string.IsNullOrEmpty(filterTermWhereClause))
                    {
                        if (!string.IsNullOrEmpty(strWhere))
                            strWhere += filterTerm.LogicalOp == EntityFilterTools.LogicalOps.Or ? " Or " : " And ";

                        strWhere += filterTermWhereClause;
                    }

                }

            IQueryable<Tbl_News> query = db.Tbl_News.AsQueryable();

            if (!string.IsNullOrEmpty(strWhere))
                query = query.Where(strWhere);

            bool isFirstSortParam = true;

            if (entityFilterTermsAndSortParams.EntitySortParamList.Count() == 0)
                entityFilterTermsAndSortParams.EntitySortParamList.Add(new EntityFilterTools.EntitySortParam("Id", EntityFilterTools.SortDir.Desc));

            foreach (var entitySortParam in entityFilterTermsAndSortParams.EntitySortParamList)
            {
                query = EntityTools.OrderByPropertyName(query, entitySortParam.SortField,
                    entitySortParam.SortDir == EntityFilterTools.SortDir.Asc, isFirstSortParam);

                isFirstSortParam = false;
            }

            //query = query.Where(sd => sd.StartDate <= dt);

            //database layer paging
            return new PagedList<Tbl_News>(query, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize).ToBusinessObjectPagedList();
        }
    }
}