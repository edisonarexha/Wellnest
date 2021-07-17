using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Diagnoses
{
    public class Create
    {
        public class Command : IRequest
        {
            public DateTime Date{get;set;}
            public string Pills { get; set; }
            
            
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var diagnose= new Diagnose{
                    Pills=request.Pills,
                    Date=request.Date
                };

                context.Diagnose.Add(diagnose);
                var success=await context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }

           
        }
    }
}