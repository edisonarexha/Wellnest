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
                        DangerStatus="High"
                    },
                    new Disease{
                        Id=2,
                        Name="Water allergy",
                        Information="Alergic to water",
                        DangerStatus="Low"
                    },
                    new Disease{
                        Id=3,
                        Name="Laughing Death",
                        Information="Deff not dying of laughing",
                        DangerStatus="Medium"
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
        }
    }
}