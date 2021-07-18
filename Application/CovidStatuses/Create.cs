using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.CovidStatuses
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Status { get; set; }
            public int Id { get; set; }
            public DateTime Date{get;set;}
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
                var covidStatus= new CovidStatus{
                    Id=request.Id,
                    Status=request.Status,
                    Date=request.Date
                };

                context.CovidStatus.Add(covidStatus);
                var success=await context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }

           
        }
    }
}