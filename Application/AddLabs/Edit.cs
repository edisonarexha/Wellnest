using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.AddLabs
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Address { get; set; }
            public string BussinessHours { get; set; }
            public string PrivPub { get; set; }
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
                var addlab = await this.context.AddLab.FindAsync(request.Id);
                if (addlab == null)
                    throw new Exception("Could not find any lab");
                
                addlab.Name = request.Name ?? addlab.Name;
                addlab.Address = request.Address ?? addlab.Address;
                addlab.BussinessHours = request.BussinessHours ?? addlab.BussinessHours;
                addlab.PrivPub = request.PrivPub ?? addlab.PrivPub;
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}