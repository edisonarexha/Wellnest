using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Analyses
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public DateTime? date { get; set; }
            public string Results { get; set; }
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
                var analysis = await this.context.Analysis.FindAsync(request.Id);
                if (analysis == null)
                    throw new Exception("Could not find any analysis");
                
                analysis.Name = request.Name ?? analysis.Name;
                analysis.date = request.date ?? analysis.date;
                analysis.Results = request.Results ?? analysis.Results;
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}