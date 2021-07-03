using System;
namespace Domain
{
    public class RecoveredPatiensCovid19
    {
        public int Id{get;set;}
        public string FirstName{get;set;}
        public string LastName{get;set;}
        public string City{get;set;}
        public int Number{get;set;}
        public int Age{get;set;}
        public DateTime Infected{get;set;}
        public DateTime Recovered{get;set;}
        public int SickDays{get;set;}
        public string QuarantinedPlacee{get;set;}
        public string VaccienName{get;set;}
    }
}