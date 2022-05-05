using SearchAndSort.Core.Cmn;
using SearchAndSort.Core.Cmn.Mapper;
using SearchAndSort.DataBase;
using SearchAndSort.Models;
using System.Collections.Generic;

namespace SearchAndSort.Extensions
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

        public static Tbl_News ToDBModel(this NewsModel businessObject)
        {
            return businessObject.MapTo<NewsModel, Tbl_News>();
        }

        public static NewsModel ToBusinessObject(this Tbl_News dbModel)
        {
            //FooterLink footerLink = new FooterLink();
            //footerLink.footerLinkID = dbModel.FooterLinkID;
            //footerLink.languageID = dbModel.LanguageID;
            //footerLink.titleLink1 = dbModel.TitleLink1;
            //footerLink.link1 = dbModel.Link1;
            //return footerLink;
            return dbModel.MapTo<Tbl_News, NewsModel>();
        }

        public static NewsModel ToBusinessObject(this Tbl_News dbModel, NewsModel destination)
        {
            return dbModel.MapTo(destination);
        }

        public static IEnumerable<NewsModel> ToBusinessObjectList(this IEnumerable<Tbl_News> dbModelList)
        {
            List<NewsModel> businessObjectList = new List<NewsModel>();

            //foreach (var dbModel in dbModelList)
            //    businessObjectList.Add(new PostDomain
            //    {
            //        footerLinkID = dbModel.FooterLinkID,
            //        languageID = dbModel.LanguageID,
            //        titleLink1 = dbModel.TitleLink1,
            //    });

            foreach (var dbModel in dbModelList)
                businessObjectList.Add(dbModel.MapTo<Tbl_News, NewsModel>());

            return businessObjectList;
        }

        public static IPagedList<NewsModel> ToBusinessObjectPagedList(this PagedList<Tbl_News> dbModelPagedList)
        {
            PagedList<NewsModel> businessObjectPagedList = new PagedList<NewsModel>();

            businessObjectPagedList.DataList.AddRange(dbModelPagedList.DataList.ToBusinessObjectList());

            businessObjectPagedList.PageIndex = dbModelPagedList.PageIndex;
            businessObjectPagedList.PageSize = dbModelPagedList.PageSize;
            businessObjectPagedList.TotalCount = dbModelPagedList.TotalCount;
            businessObjectPagedList.TotalPages = dbModelPagedList.TotalPages;

            return businessObjectPagedList;
        }

        #endregion

        //...
    }

}
