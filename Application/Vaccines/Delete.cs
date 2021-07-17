using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Vaccines
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int VaccineId { get; set; }
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
                
                
                var vaccine = await this.context.Vaccine.FindAsync(request.VaccineId);

                if(vaccine == null)
                    throw new Exception("Could not find this vacinne");

                this.context.Remove(vaccine);
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}