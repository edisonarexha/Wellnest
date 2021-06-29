using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Allergies
{
    public class Create
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
                var allergy= new Allergy{
                    AllergyId=request.AllergyId,
                    Name=request.Name,
                    Reason=request.Reason
                };

                context.Allergy.Add(allergy);
                var success=await context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }

           
        }
    }
}