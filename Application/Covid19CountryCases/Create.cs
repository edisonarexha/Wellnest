using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Covid19CountryCases
{
    public class create
    {
        public class Command : IRequest
        {
            public int Id{get;set;}
            public string CountryName{get;set;}
            public int Cases{get;set;}
            public int Recoveries{get;set;}
            public int deaths{get;set;}
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
                var covid =new Covid19CasesCountry{
                    Id=request.Id,
                    CountryName=request.CountryName,
                    Cases=request.Cases,
                    Recoveries=request.Recoveries,
                    deaths=request.deaths,
                };
                this.context.Covid19CasesCountry.Add(covid);
                var success = await this.context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}