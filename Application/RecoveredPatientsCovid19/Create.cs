using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.RecoveryPatient
{
    public class create
    {
        public class Command : IRequest
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
        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var Recovered =new RecoveredPatiensCovid19{
                Id=request.Id,
            FirstName=request.FirstName,
            LastName=request.LastName,
            City=request.City,
            Number=request.Number,
            Age=request.Age,
            Infected=request.Infected,
            Recovered=request.Recovered,
            SickDays=request.SickDays,
            QuarantinedPlacee=request.QuarantinedPlacee,
            VaccienName=request.VaccienName,

                };
                this.context.RecoveredPatiensCovid19.Add(Recovered);
                var success = await this.context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}
