using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Infected
{
    public class Edit
    {
        public class Command :IRequest
        {   public int Id{get;set;}
            public String CovidName{get;set;}
            public String CovidSurname{get;set;}
            public String City{get;set;}
            public String State{get;set;}
            public int? Age{get;set;}
            public int? FamilyMembers{get;set;}
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
                var infected = await this.context.CovidInfected.FindAsync(request.Id);
                if(infected==null)
                throw new Exception("Couldnt find any person");

                infected.CovidName =request.CovidName ?? infected.CovidName;
                infected.CovidSurname =request.CovidSurname ?? infected.CovidSurname;
                infected.City =request.City ?? infected.City;
                infected.State=request.State??infected.State;
                infected.Age=request.Age??infected.Age;
              infected.FamilyMembers=request.FamilyMembers??infected.FamilyMembers;

                var success = await this.context.SaveChangesAsync()> 0;
                if(success ) return Unit.Value;
                throw new Exception("Problem Saving Changes");
            }
        }
    }
}