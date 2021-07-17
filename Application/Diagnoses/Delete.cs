using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Diagnoses
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int DiagnoseId { get; set; }
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
                
                
                var diagnose = await this.context.Diagnose.FindAsync(request.DiagnoseId);

                if(diagnose == null)
                    throw new Exception("Could not find this diagnose");

                this.context.Remove(diagnose);
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}