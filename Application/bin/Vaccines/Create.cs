using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Vaccines
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public DateTime Date_Taken{get;set;}
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
                var vaccine= new Vaccine{
                    Name=request.Name,
                    Age=request.Age,
                    Date_Taken=request.Date_Taken
                };

                context.Vaccine.Add(vaccine);
                var success=await context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }

           
        }
    }
}