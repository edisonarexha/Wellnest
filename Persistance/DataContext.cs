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
        public DbSet<Allergy> Allergy { get; set; }
        public DbSet<Disease> Diseases { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Covid19CasesCountry> Covid19CasesCountry{get;set;} 
        public DbSet<Analysis> Analysis { get; set; }
        public DbSet <CovidInfected> CovidInfected{get;set;}
        public DbSet <BookAppointment> BookAppointment{get;set;}
        public DbSet <AddLab> AddLab{get;set;}
        public DbSet <AnalysisApp> AnalysisApp{get;set;}
        public DbSet <RecoveredPatiensCovid19> RecoveredPatiensCovid19{get;set;}
        public DbSet <Diagnose> Diagnose{get;set;}
        public DbSet <Vaccine> Vaccine{get;set;}
         public DbSet <CovidStatus> CovidStatus{get;set;}


    }
}
