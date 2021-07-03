using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.RecoveryPatient
{
    public class Edit
    {
        public class Command :IRequest
            { 
            public int Id{get;set;}
        public string FirstName{get;set;}
        public string LastName{get;set;}
        public string City{get;set;}
        public int? Number{get;set;}
        public int? Age{get;set;}
        public DateTime? Infected{get;set;}
        public DateTime? Recovered{get;set;}
        public int? SickDays{get;set;}
        public string QuarantinedPlacee{get;set;}
        public string VaccienName{get;set;}
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, System.Threading.CancellationToken cancellationToken)
            {
                var Recovery = await this.context.RecoveredPatiensCovid19.FindAsync(request.Id);
                if(Recovery==null)
                throw new Exception("Couldnt find any Patient");

                Recovery.FirstName =request.FirstName ?? Recovery.FirstName;
                Recovery.LastName =request.LastName ?? Recovery.LastName;
                Recovery.City =request.City ?? Recovery.City;
                Recovery.Number=request.Number??Recovery.Number;
                Recovery.Age=request.Age??Recovery.Age;
                Recovery.Infected=request.Infected??Recovery.Infected;
                Recovery.Recovered=request.Recovered??Recovery.Recovered;
                Recovery.SickDays=request.SickDays??Recovery.SickDays;
                Recovery.QuarantinedPlacee=request.QuarantinedPlacee??Recovery.QuarantinedPlacee;
                Recovery.VaccienName=request.VaccienName??Recovery.VaccienName;

                var success = await this.context.SaveChangesAsync()> 0;
                if(success ) return Unit.Value;
                throw new Exception("Problem Saving Changes");
            }
        }
    }
}