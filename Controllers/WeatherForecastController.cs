using SearchAndSort.Core.Framework.Cmn;
using SearchAndSort.Core.Framework.Cmn.EntityFilterTools;
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
            EFRepositories eFRepositories = new EFRepositories();//it's not 
            
            var queryableWeatherForecast = await eFRepositories.GetAllWeatherForecast(entityFilterTermsAndSortParams);

            return
                new PagedList<WeatherForecast>(queryableWeatherForecast, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize)
                .ToBusinessObjectPagedList();

        }

        [HttpPost]
        public async Task<IPagedList<WeatherForecastDto>> SearchAndSortWithDapprAsync(EntityFilterTools.EntityFilterTermsAndSortParams entityFilterTermsAndSortParams)
        {
            DapprRepositories dapprRepositories = new DapprRepositories();//it's not

            var weatherForecastDtoList = await dapprRepositories.GetAllWeatherForecast(entityFilterTermsAndSortParams);

            return
                new PagedList<WeatherForecast>(weatherForecastDtoList, entityFilterTermsAndSortParams.PageIndex, entityFilterTermsAndSortParams.PageSize)
                .ToBusinessObjectPagedList();
        }

    }
}