using SearchAndSort.Core.Data;
using SearchAndSort.Core.Framework.Cmn;
using SearchAndSort.Core.Framework.Infrastructure.Mapper;

namespace SearchAndSort.Core.Extensions
{
    public static class MappingExtensions
    {
        public static TDestination MapTo<TSource, TDestination>(this TSource source)
        {
            return AutoMapperConfiguration.Mapper.Map<TSource, TDestination>(source);
        }

        public static TDestination MapTo<TSource, TDestination>(this TSource source, TDestination destination)
        {
            return AutoMapperConfiguration.Mapper.Map(source, destination);
        }

        #region Tbl_News

        public static WeatherForecast ToDBModel(this WeatherForecastDto businessObject)
        {
            return businessObject.MapTo<WeatherForecastDto, WeatherForecast>();
        }

        public static WeatherForecastDto ToBusinessObject(this WeatherForecast dbModel)
        {
            //FooterLink footerLink = new FooterLink();
            //footerLink.footerLinkID = dbModel.FooterLinkID;
            //footerLink.languageID = dbModel.LanguageID;
            //footerLink.titleLink1 = dbModel.TitleLink1;
            //footerLink.link1 = dbModel.Link1;
            //return footerLink;
            return dbModel.MapTo<WeatherForecast, WeatherForecastDto>();
        }

        public static WeatherForecastDto ToBusinessObject(this WeatherForecast dbModel, WeatherForecastDto destination)
        {
            return dbModel.MapTo(destination);
        }

        public static IEnumerable<WeatherForecastDto> ToBusinessObjectList(this IEnumerable<WeatherForecast> dbModelList)
        {
            List<WeatherForecastDto> businessObjectList = new List<WeatherForecastDto>();

            //foreach (var dbModel in dbModelList)
            //    businessObjectList.Add(new PostDomain
            //    {
            //        footerLinkID = dbModel.FooterLinkID,
            //        languageID = dbModel.LanguageID,
            //        titleLink1 = dbModel.TitleLink1,
            //    });

            foreach (var dbModel in dbModelList)
                businessObjectList.Add(dbModel.MapTo<WeatherForecast, WeatherForecastDto>());

            return businessObjectList;
        }

        public static IPagedList<WeatherForecastDto> ToBusinessObjectPagedList(this PagedList<WeatherForecast> dbModelPagedList)
        {
            PagedList<WeatherForecastDto> businessObjectPagedList = new PagedList<WeatherForecastDto>();

            businessObjectPagedList.DataList.AddRange(dbModelPagedList.DataList.ToBusinessObjectList());

            businessObjectPagedList.PageIndex = dbModelPagedList.PageIndex;
            businessObjectPagedList.PageSize = dbModelPagedList.PageSize;
            businessObjectPagedList.TotalCount = dbModelPagedList.TotalCount;
            businessObjectPagedList.TotalPages = dbModelPagedList.TotalPages;

            return businessObjectPagedList;
        }

        #endregion
    }
}
