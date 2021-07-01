using System;
namespace Domain
{
    public class Covid19CasesCountry
    {
        public int Id{get;set;}

        public string CountryName{get;set;}
    
        public int Cases{get;set;}

        public int Recoveries{get;set;}
        public int deaths{get;set;}
    }
}