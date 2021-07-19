using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Diseases
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Information { get; set; }
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
                var disease = await this.context.Diseases.FindAsync(request.Id);
                if (disease == null)
                    throw new Exception("Could not find any disease");
                
                disease.Name = request.Name ?? disease.Name;
                disease.Information = request.Information ?? disease.Information;
                
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}