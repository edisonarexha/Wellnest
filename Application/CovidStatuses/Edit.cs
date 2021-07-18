using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.CovidStatuses
{
    public class Edit
    {
        public class Command : IRequest
        {
        public int Id{get;set;}
        public string Status{get;set;}
        public DateTime? Date {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, System.Threading.CancellationToken cancellationToken)
            {
                var covidStatus = await this.context.CovidStatus.FindAsync(request.Id);
                if (covidStatus == null)
                    throw new Exception("Status not found");
                
                covidStatus.Status = request.Status ?? covidStatus.Status;
                covidStatus.Date = request.Date ?? covidStatus.Date;
                
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}