using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Debug;
using WebApi.Entities;

namespace WebApi.Helpers
{
    public class DataContext : DbContext
    {
        public static readonly LoggerFactory _myLoggerFactory =
            new LoggerFactory(new[] {
                new DebugLoggerProvider()
            });

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLoggerFactory(_myLoggerFactory);
        }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<User> Users { get; set; }
    }
}