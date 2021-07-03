using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.RecoveryPatient
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
                var Recovery = await this.context.RecoveredPatiensCovid19.FindAsync(request.Id);
                if(Recovery==null)

                    throw new Exception("Could not find find the specified Patient Maybe create one");

                    this.context.Remove(Recovery);
                    
                    var success = await this.context.SaveChangesAsync()>0;

                    if(success) return Unit.Value;
                    throw new Exception("Problem saving changes!");
                }
            }
        }
    }
