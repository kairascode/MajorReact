using System.Data.Common;
using MajorReact.Models;
using Microsoft.EntityFrameworkCore;

namespace MajorReact.Data
{
    public class AppDbContext:DbContext

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee>Employees { get; set; }

        public DbSet<Department> Departments { get; set; }
    }
}
