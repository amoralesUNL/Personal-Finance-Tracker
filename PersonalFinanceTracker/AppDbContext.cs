using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace PersonalFinanceTracker
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {

        }

        public DbSet<Transaction> Transactions
        {
            get; set;
        }
    }
}
