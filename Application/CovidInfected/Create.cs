using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Infected
{
    public class create
    {
        public class Command : IRequest
        {
           public int Id{get;set;}
            public String CovidName{get;set;}
            public String CovidSurname{get;set;}
            public String City{get;set;}
            public String State{get;set;}
            public int Age{get;set;}
            public int FamilyMembers{get;set;}
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
                var covid =new CovidInfected{
                Id=request.Id,
            CovidName=request.CovidName,
            CovidSurname=request.CovidSurname,
            City=request.City,
            State=request.State,
            Age=request.Age,
            FamilyMembers=request.FamilyMembers,
            
                };
                this.context.CovidInfected.Add(covid);
                var success = await this.context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}
