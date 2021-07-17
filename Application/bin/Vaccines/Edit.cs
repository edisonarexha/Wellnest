using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Vaccines
{
    public class Edit
    {
        public class Command : IRequest
        {
        public int VaccineId{get;set;}
        public string Name{get;set;}
        public int? Age{get; set;}
        public DateTime? Date_Taken {get; set;}
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
                var vaccine = await this.context.Vaccine.FindAsync(request.VaccineId);
                if (vaccine == null)
                    throw new Exception("Could not find any vaccines");
                
                vaccine.Name = request.Name ?? vaccine.Name;
                vaccine.Age = request.Age ?? vaccine.Age;
                vaccine.Date_Taken = request.Date_Taken ?? vaccine.Date_Taken;
                
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}