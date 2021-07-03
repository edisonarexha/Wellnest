using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.AnalysisAppointment
{
    public class create
    {
        public class Command : IRequest
        {  public int Id{get;set;}
        public string Name{get;set;}
        public string Surname{get; set;}

        public int UserId{get;set;}
        public string Type {get;set;}

        public string Lab {get;set;}

        public DateTime Date {get; set;}
        }
        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var analysisapp =new AnalysisApp{
                Id=request.Id,
                Name=request.Name,
                Surname=request.Surname,
                UserId=request.UserId,
                Type=request.Type,
                Lab=request.Lab,
                Date=request.Date,
            
                };
                this.context.AnalysisApp.Add(analysisapp);
                var success = await this.context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}
