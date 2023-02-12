using Microsoft.EntityFrameworkCore;

namespace SearchAndSort.Core.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base() { }

        public virtual DbSet<WeatherForecast> WeatherForecasts { get; set; }

    }
}
