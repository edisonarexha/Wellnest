using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Covid19CountryCases
{
    public class Delete 
    {
        public class Command : IRequest
        {
            public int Id{get;set;}
        }

        public class Handler :IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var covid = await this.context.Covid19CasesCountry.FindAsync(request.Id);
                if(covid==null)

                    throw new Exception("Could not find the speciefed country");

                    this.context.Remove(covid);
                    
                    var success = await this.context.SaveChangesAsync()>0;

                    if(success) return Unit.Value;
                    throw new Exception("Problem saving changes!");
                }
            }
        }
    }
