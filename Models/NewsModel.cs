using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SearchAndSort.Models
{
    public class NewsModel
    {    
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Detail { get; set; }
    }
}