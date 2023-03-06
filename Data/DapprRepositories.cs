using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
using System.Text;

namespace SearchAndSort.Core.Data
{
    public class DapprRepositories
    {
        public async Task<IEnumerable<WeatherForecast>> GetAllWeatherForecast(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            StringBuilder strWhere = new StringBuilder();
            StringBuilder strOrderBy = new StringBuilder();

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

            if (strWhere.Length != 0)
                query += EntityFilterTools.WHERE + strWhere;

            if (entityFilterTermsAndSortParams.EntitySortParamList.Count() == 0)
                entityFilterTermsAndSortParams.EntitySortParamList.Add(
                    new EntityFilterTools.EntitySortParam("Id", EntityFilterTools.SortDir.Desc));

            StringBuilder sortBuilder = new StringBuilder();
            foreach (var entitySortParam in entityFilterTermsAndSortParams.EntitySortParamList)
            {
                sortBuilder.Append(OrderByPropertyName(query, entitySortParam.SortField, entitySortParam.SortDir == EntityFilterTools.SortDir.Asc));
            }

            query += sortBuilder.ToString();

            //var result = await _dbSession.Connection.QueryAsync<CompanyDto>(query);
            var result = new List<WeatherForecast>();

            return (IEnumerable<WeatherForecast>)result;
        }

        public string OrderByPropertyName(string q, string SortField, bool Ascending)
        {
            string method = Ascending ? "OrderBy" : "OrderByDescending";
            //if (!firstSortField)
            //    method = Ascending ? "ThenBy" : "ThenByDescending";

            return method;
        }

        private string GetSearchAndSortWithDapprQuery()
        {
            return "select ";
        }

    }
}
