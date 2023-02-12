namespace SearchAndSort.Core.Framework.Cmn
{
    /// <summary>
    /// Paged list interface
    /// </summary>
    public interface IPagedList<T>
    {
        List<T> DataList { get; set; }
        int PageIndex { get; set; }
        int PageSize { get; set; }
        int TotalCount { get; set; }
        int TotalPages { get; set; }
        bool HasPreviousPage { get; }
        bool HasNextPage { get; }
    }
}
