using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SearchAndSort.Core.Cmn.EntityTools
{
    public static class EntityTools
    {

        //var result = database.SomeEntities.Search(x => x.SomeProp, "value");

        static IQueryable<TSource> Search<TSource, TValue>(
            this IQueryable<TSource> source,
            Expression<Func<TSource, TValue>> selector,
            TValue value)
        {
            var predicate = Expression.Lambda<Func<TSource, bool>>(
                Expression.Equal(
                    selector.Body,
                    Expression.Constant(value, typeof(TValue))
                ), selector.Parameters);
            return source.Where(predicate);
        }

        public static PropertyInfo GetClassParameter<T>(string propertyName)
        {
            Type myType = typeof(T);
            // Get the PropertyInfo object by passing the property name.
            //PropertyInfo propInfo = myType.GetProperty(propertyName, BindingFlags.IgnoreCase);

            foreach (PropertyInfo propInfo in myType.GetProperties())
                if (propInfo.Name.ToLower() == propertyName.ToLower())
                    return propInfo;

            return null;
        }

        //public static PropertyInfo GetPrimaryKeyInfo<T>()
        //{
        //    PropertyInfo[] properties = typeof(T).GetProperties();
        //    foreach (PropertyInfo pI in properties)
        //    {
        //        System.Object[] attributes = pI.GetCustomAttributes(true);
        //        foreach (object attribute in attributes)
        //        {
        //            if (attribute is EdmScalarPropertyAttribute)
        //            {
        //                if ((attribute as EdmScalarPropertyAttribute).EntityKeyProperty == true)
        //                    return pI;
        //            }
        //            else if (attribute is ColumnAttribute)
        //            {

        //                if ((attribute as ColumnAttribute).IsPrimaryKey == true)
        //                    return pI;
        //            }
        //        }
        //    }
        //    return null;
        //}

        public static IQueryable<T> OrderByPropertyName<T>(this IQueryable<T> q, string SortField, bool Ascending, bool firstSortField)
        {
            var param = Expression.Parameter(typeof(T), "p");
            var prop = Expression.Property(param, SortField);
            var exp = Expression.Lambda(prop, param);

            string method = Ascending ? "OrderBy" : "OrderByDescending";
            if (!firstSortField)
                method = Ascending ? "ThenBy" : "ThenByDescending";

            Type[] types = new Type[] { q.ElementType, exp.Body.Type };
            var rs = Expression.Call(typeof(Queryable), method, types, q.Expression, exp);
            return q.Provider.CreateQuery<T>(rs);

            //public List<Customer> Get(string PropertyName)
            //{
            //    var list = CustomerDataSource.customerData.AsQueryable().OrderByPropertyName("PropertyName", true).ToList();
            //}
        }
    }

}
