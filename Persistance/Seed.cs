using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistance{
    public class Seed{
        public static void SeedData(DataContext context){
            if(!context.Diseases.Any()){
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
        }
    }
}