using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.AnalysisAppointment
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id{get;set;}
        public string Name{get;set;}
        public string Surname{get; set;}

        public int? UserId{get;set;}
        public string Type {get;set;}

        public string Lab {get;set;}

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
                var analysisapp = await this.context.AnalysisApp.FindAsync(request.Id);
                if (analysisapp == null)
                    throw new Exception("Could not find any analysis");
                
                analysisapp.Name = request.Name ?? analysisapp.Name;
                analysisapp.Surname = request.Surname ?? analysisapp.Surname;
                analysisapp.UserId = request.UserId ?? analysisapp.UserId;
                analysisapp.Type = request.Type ?? analysisapp.Type;
                analysisapp.Lab = request.Lab ?? analysisapp.Lab;
                analysisapp.Date = request.Date ?? analysisapp.Date;
                
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}