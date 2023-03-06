using SearchAndSort.Core.Framework.Cmn;
using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
using SearchAndSort.Core.Framework.Cmn.EntityTools;
using SearchAndSort.Core.Data;
using SearchAndSort.Core.Extensions;
using Microsoft.AspNetCore.Mvc;
using SearchAndSort.Core.Dtos;

namespace SearchAndSort.Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        [HttpPost]
        public async Task<IPagedList<WeatherForecastDto>> SearchAndSortWithEntityFrameWorkAsync(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            EFRepositories eFRepositories = new EFRepositories();
            
            var query = await eFRepositories.GetAllWeatherForecast(entityFilterTermsAndSortParams);

            return
                new PagedList<WeatherForecast>(query, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize)
                .ToBusinessObjectPagedList();

        }

        [HttpPost]
        public async Task<IPagedList<WeatherForecastDto>> SearchAndSortWithDapprAsync(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            DapprRepositories dapprRepositories = new DapprRepositories();

            var weatherForecastDtoList = await dapprRepositories.GetAllWeatherForecast(entityFilterTermsAndSortParams);

            return
                new PagedList<WeatherForecast>(weatherForecastDtoList, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize)
                .ToBusinessObjectPagedList();
        }

    }
}