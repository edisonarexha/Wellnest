using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Allergies
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int AllergyId { get; set; }
            public string Name { get; set; }
            public string Reason { get; set; }

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
                var allergy = await context.Allergy.FindAsync(request.AllergyId);
                if (allergy == null)
                {
                    throw new Exception("Couldnt find allergy");
                }

                allergy.Name = request.Name ?? allergy.Name;
                allergy.Reason = request.Reason ?? allergy.Reason;
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}