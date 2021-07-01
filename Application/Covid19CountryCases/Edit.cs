using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Covid19CountryCases
{
    public class Edit
    {
        public class Command :IRequest
        {
            public int Id{get;set;}
            public string CountryName{get;set;}
            public int? Cases{get;set;}
            public int? Recoveries{get;set;}
            public int? deaths{get;set;}

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
                var covid = await this.context.Covid19CasesCountry.FindAsync(request.Id);
                if(covid==null)
                throw new Exception("Couldnt find any country");

                covid.CountryName =request.CountryName ?? covid.CountryName;
                covid.Cases =request.Cases ?? covid.Cases;
                covid.Recoveries =request.Recoveries ?? covid.Recoveries;
                covid.deaths=request.deaths??covid.deaths;

                var success = await this.context.SaveChangesAsync()> 0;
                if(success ) return Unit.Value;
                throw new Exception("Problem Saving Changes");
            }
        }
    }
}