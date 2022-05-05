using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SearchAndSort.DataBase
{
    public class MyDbContext : DbContext
    {
        public DbSet<Tbl_News> Tbl_News { get; set; }

    }
}