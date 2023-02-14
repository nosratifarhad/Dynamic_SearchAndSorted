using SearchAndSort.Core.Framework.Cmn;
using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
using SearchAndSort.Core.Framework.Cmn.EntityTools;
using SearchAndSort.Core.Data;
using SearchAndSort.Core.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace SearchAndSort.Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        ApplicationDbContext dBContext = new ApplicationDbContext();

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<IPagedList<WeatherForecastDto>> GetAllProductByLanguageIdAsync(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            string strWhere = string.Empty;
            string strOrderBy = string.Empty;

            foreach (var filterTerm in entityFilterTermsAndSortParams.EntityFilterTermList)
                if (!string.IsNullOrEmpty(filterTerm.SearchTerm))
                {
                    string filterTermWhereClause = EntityFilterTools.GetSearchFilterTermWhereClause<WeatherForecast>(filterTerm);

                    if (!string.IsNullOrEmpty(filterTermWhereClause))
                    {
                        if (!string.IsNullOrEmpty(strWhere))
                            strWhere += filterTerm.LogicalOp == EntityFilterTools.LogicalOps.Or ? " Or " : " And ";

                        strWhere += filterTermWhereClause;
                    }

                }

            IQueryable<WeatherForecast> query = dBContext.WeatherForecasts.AsQueryable();

            if (!string.IsNullOrEmpty(strWhere))
                query = query.Where(a => a.Summary == strWhere);

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

            return
                new PagedList<WeatherForecast>(query, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize)
                .ToBusinessObjectPagedList();
        }

    }
}