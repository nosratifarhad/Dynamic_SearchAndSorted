using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
using SearchAndSort.Core.Framework.Cmn.EntityTools;
using System.Text;

namespace SearchAndSort.Core.Data
{
    public class EFRepositories
    {
        ApplicationDbContext dBContext = new ApplicationDbContext();

        public async Task<IQueryable<WeatherForecast>> GetAllWeatherForecast(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            StringBuilder strWhere = new StringBuilder();
            StringBuilder strOrderBy = new StringBuilder();

            foreach (var filterTerm in entityFilterTermsAndSortParams.EntityFilterTermList)
                if (!string.IsNullOrEmpty(filterTerm.SearchTerm))
                {
                    string filterTermWhereClause = EntityFilterTools.GetSearchFilterTermWhereClauseWithEntityFrameWork<WeatherForecast>(filterTerm);

                    if (!string.IsNullOrEmpty(filterTermWhereClause))
                    {
                        if (strWhere.Length != 0)
                            strWhere.Append(filterTerm.LogicalOp == EntityFilterTools.LogicalOps.Or ? " Or " : " And ");

                        strWhere.Append(filterTermWhereClause);
                    }
                }

            IQueryable<WeatherForecast> query = dBContext.WeatherForecasts.AsQueryable();

            if (strWhere.Length != 0)
                query = query.Where(a => a.Summary == strWhere.ToString());

            bool isFirstSortParam = true;

            if (entityFilterTermsAndSortParams.EntitySortParamList.Count() == 0)
                entityFilterTermsAndSortParams.EntitySortParamList.Add(
                    new EntityFilterTools.EntitySortParam("Id", EntityFilterTools.SortDir.Desc));

            foreach (var entitySortParam in entityFilterTermsAndSortParams.EntitySortParamList)
            {
                query = EntityTools.OrderByPropertyName(query, entitySortParam.SortField,
                    entitySortParam.SortDir == EntityFilterTools.SortDir.Asc, isFirstSortParam);

                isFirstSortParam = false;
            }

            //query = query.Where(sd => sd.Date <= DateTime.UtcNow);
            
            return query;
        }

    }
}
