using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
using SearchAndSort.Core.Framework.Cmn.EntityTools;
using System.Text;

namespace SearchAndSort.Core.Data
{
    public class DapprRepositories
    {
        public async Task<IEnumerable<WeatherForecast>> GetAllWeatherForecast(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            StringBuilder strQuery = new StringBuilder();
            StringBuilder strWhere = new StringBuilder();

            foreach (var filterTerm in entityFilterTermsAndSortParams.EntityFilterTermList)
                if (!string.IsNullOrEmpty(filterTerm.SearchTerm))
                {
                    string filterTermWhereClause = EntityFilterTools.GetSearchFilterTermWhereClauseWithDappr<WeatherForecast>(filterTerm);

                    if (!string.IsNullOrEmpty(filterTermWhereClause))
                    {
                        if (strWhere.Length != 0)
                            strWhere.Append(filterTerm.LogicalOp == EntityFilterTools.LogicalOps.Or ? " Or " : " And ");

                        strWhere.Append(filterTermWhereClause);
                    }
                }

            var query = GetSearchAndSortWithDapprQuery();
            strQuery.Append(query);

            if (strWhere.Length != 0)
                strQuery.Append(EntityFilterTools.WHERE + strWhere);

            bool isFirstSortParam = true;

            if (entityFilterTermsAndSortParams.EntitySortParamList.Count() == 0)
                entityFilterTermsAndSortParams.EntitySortParamList.Add(
            new EntityFilterTools.EntitySortParam("Id", EntityFilterTools.SortDir.Desc));

            StringBuilder sortBuilder = new StringBuilder();
            sortBuilder.Append(EntityFilterTools.ORDERBY);

            foreach (var entitySortParam in entityFilterTermsAndSortParams.EntitySortParamList)
            {
                sortBuilder.Append(EntityTools.OrderByPropertyName(entitySortParam.SortField, (int)entitySortParam.SortDir, isFirstSortParam));

                isFirstSortParam = false;
            }

            strQuery.AppendLine(sortBuilder.ToString());

            //var result = await _dbSession.Connection.QueryAsync<WeatherForecast>(strQuery.ToString()).ConfigureAwait(false);
            var result = new List<WeatherForecast>();

            return (IEnumerable<WeatherForecast>)result;
        }

        private string GetSearchAndSortWithDapprQuery()
            => "SELECT * FROM WeatherForecast";

    }
}
