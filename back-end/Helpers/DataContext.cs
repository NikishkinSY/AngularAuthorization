using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Debug;
using WebApi.Entities;
using System;

namespace WebApi.Helpers
{
    public class DataContext : DbContext
    {
        public static readonly LoggerFactory _myLoggerFactory =
            new LoggerFactory(new[] {
                new DebugLoggerProvider()
            });

        public DataContext(DbContextOptions<DataContext> options) 
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLoggerFactory(_myLoggerFactory);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Human>().HasData(
                new Human { Id = 1, Name = "Andrew", Birth = new DateTime(1990, 01, 10) },
                new Human { Id = 2, Name = "Sergey", Birth = new DateTime(2000, 03, 18) },
                new Human { Id = 3, Name = "Marina", Birth = new DateTime(1995, 08, 1) }
            );

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Email = "frodkaaa@gmail.com",
                    PasswordHash = new byte[] { 213, 122, 175, 160, 65, 191, 51, 178, 10, 172, 220, 111, 253, 183, 125, 169, 241, 190, 182, 41, 124, 124, 37, 22, 22, 104, 228, 153, 212, 41, 81, 129, 50, 132, 40, 88, 225, 148, 241, 88, 227, 55, 178, 19, 58, 162, 78, 82, 243, 58, 188, 27, 112, 98, 205, 166, 231, 17, 159, 38, 170, 165, 3, 125 },
                    PasswordSalt = new byte[] { 237, 161, 175, 35, 26, 61, 239, 242, 185, 88, 152, 11, 201, 59, 235, 207, 244, 255, 14, 23, 140, 226, 153, 127, 208, 156, 245, 156, 159, 60, 143, 125, 130, 103, 55, 5, 43, 108, 181, 251, 17, 27, 197, 35, 81, 231, 179, 16, 133, 183, 255, 142, 179, 200, 146, 248, 243, 39, 209, 48, 134, 233, 188, 247, 169, 69, 245, 189, 108, 8, 205, 198, 34, 181, 52, 34, 55, 201, 30, 242, 41, 80, 44, 208, 169, 241, 81, 128, 27, 77, 20, 234, 6, 173, 227, 147, 18, 250, 16, 13, 166, 34, 202, 57, 254, 63, 24, 152, 161, 113, 193, 2, 199, 22, 221, 208, 255, 149, 36, 253, 84, 151, 149, 216, 141, 56, 185, 50 },
                    ConfirmationGuid = new Guid("9975c054-4dcc-4fa9-8276-f7d0ce47b01e"),
                    IsRegistered = true
                });
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Human> Humans { get; set; }
    }
}