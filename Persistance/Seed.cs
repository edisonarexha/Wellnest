using System.Collections.Generic;
using System.Linq;
using Domain;
using System;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Diseases.Any())
            {
                var diseases = new List<Disease>{
                    new Disease{
                        Id=1,
                        Name="Corona",
                        Information="Covid 19",
                        
                    },
                    new Disease{
                        Id=2,
                        Name="Water allergy",
                        Information="Alergic to water",
                        
                    },
                    new Disease{
                        Id=3,
                        Name="Laughing Death",
                        Information="Deff not dying of laughing",
                        
                    }
                };
                context.Diseases.AddRange(diseases);
                context.SaveChanges();
            }

            if (!context.Allergy.Any())
            {
                var allergies = new List<Allergy>{
                    new Allergy{
                            AllergyId = 1,
                            Reason = "Seasonal, from flowers,weeds...",
                            Name = "Pollen"
                    },
                    new Allergy{

                            AllergyId = 2,
                            Reason = "Ice cream and milk diaries",
                            Name = "Lactose Intolerance"
                    },
                };
                context.Allergy.AddRange(allergies);
                context.SaveChanges();
            }

            if(!context.Covid19CasesCountry.Any())
            {
                var covid = new List<Covid19CasesCountry>{
                    new Covid19CasesCountry{
                        Id=1,
                        CountryName="Kosovo",
                        Cases=123123,
                        Recoveries=23213,
                        deaths=23,
                    },
                };
                context.Covid19CasesCountry.AddRange(covid);
                context.SaveChanges();
            }

            if(!context.CovidInfected.Any())
            {
                var infected =new List<CovidInfected>{
                    new CovidInfected{
                        Id=1,
                        CovidName="Joe",
                        CovidSurname="Smith",
                        City="New York",
                        State="New York",
                        Age=24,
                        FamilyMembers=5,
                    },
                };
                context.CovidInfected.AddRange(infected);
                context.SaveChanges();
            }

            if(!context.BookAppointment.Any())
            {
                var Appointment =new List<BookAppointment>{
                    new BookAppointment{
                        Id=1,
                        FirstName="Joe",
                        SecondName="Smith",
                        Number=049282432,
                        Email="Joesmith19@gmail.com",
                        AppointmentDate=DateTime.Now.AddMonths(+2),
                        Comment="I have terrible Fever, i cant stand up and when i do i feel like falling off "+
                        " I dont know what is going on but whenever i eat i feel like throwing up",
                    },
                };
                context.BookAppointment.AddRange(Appointment);
                context.SaveChanges();
            }
            if(!context.RecoveredPatiensCovid19.Any())
            {
                var Recovery =new List<RecoveredPatiensCovid19>{
                    new RecoveredPatiensCovid19{
                        Id=1,
                        FirstName="Joe",
                        LastName="Smith",
                        City="New York",
                        Number=0492729421,
                        Age=24,
                        Infected=DateTime.Now,
                        Recovered=DateTime.Today,
                        SickDays=14,
                        QuarantinedPlacee="House,Alone,2 Floors",
                        VaccienName="Phizer 2021"

                    },
                };
                context.RecoveredPatiensCovid19.AddRange(Recovery);
                context.SaveChanges();
            }


            if (!context.User.Any())
            {
                var users = new List<User>{
                    new User{

                        Id=1,
                        name="Edisona",
                        surname="Rexha",
                        email="testt",
                        userkey=1
                    },
                };
                context.User.AddRange(users);
                context.SaveChanges();
            }
            if (!context.Analysis.Any())
            {
                var analysis = new List<Analysis>{
                    new Analysis{
                            Id = 1,
                            Name = "Analizat e gjakut",
                            date = DateTime.Now.AddMonths(-2),
                            Results = "Gjithqka nrregull"
                    },
                    new Analysis{

                            Id = 2,
                            Name = "Analizat per Covid",
                            date = DateTime.Now.AddMonths(-2),
                            Results = "Negativ"
                    },
                };
                context.Analysis.AddRange(analysis);
                context.SaveChanges();
            }

             if (!context.AddLab.Any())
            {
                var addlab = new List<AddLab>{
                    new AddLab{
                            Id = 1,
                            Name = "KSLAb",
                            Address = "Rruga B, Prishtine",
                            BussinessHours = "07:00-19:00",
                            
                            PrivPub = "public",
                            
                    },
                   
                };
                context.AddLab.AddRange(addlab);
                context.SaveChanges();
            }

            if (!context.AnalysisApp.Any())
            {
                var analysisapp = new List<AnalysisApp>{
                    new AnalysisApp{
                            Id = 1,
                            Name = "Argent",
                            Surname = "Kelmendi",
                            UserId = 1242810003,
                            
                            Type = "Analizat e gjakut",
                            Lab = "MediLab",
                            Date = DateTime.Now.AddMonths(-2),
                    },
                   
                };
                context.AnalysisApp.AddRange(analysisapp);
                context.SaveChanges();
            }
            if (!context.Vaccine.Any())
            {
                var vaccine = new List<Vaccine>{
                    new Vaccine{
                            VaccineId = 1,
                            Name = "Adenovirus",
                            Age=17,
                            Date_Taken=DateTime.Today,
                    },

                };
                context.Vaccine.AddRange(vaccine);
                context.SaveChanges();
            }
             if (!context.Diagnose.Any())
            {
                var diagnose = new List<Diagnose>{
                    new Diagnose{
                            DiagnoseId = 1,
                            Date=DateTime.Today,
                            Pills = "Alesse , Desogen",
                    },

                };
                context.Diagnose.AddRange(diagnose);
                context.SaveChanges();
            }
            if (!context.CovidStatus.Any())
            {
                var covidStatus = new List<CovidStatus>{
                    new CovidStatus{
                        Id=1,
                        Status="Positive",
                        Date=DateTime.Today
                    }
                };
                context.CovidStatus.AddRange(covidStatus);
                context.SaveChanges();
            }

        }
    }
}