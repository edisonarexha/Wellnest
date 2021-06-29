using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Allergy> Allergy {get;set;}
        public DbSet<Disease> Diseases {get;set;}

    }
}
