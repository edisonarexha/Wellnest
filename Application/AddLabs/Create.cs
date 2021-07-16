using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.AddLabs
{
    public class Create
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

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var addlab = new AddLab{
                    Id = request.Id,
                    Name = request.Name,
                    Address = request.Address,
                    BussinessHours = request.BussinessHours,
                    PrivPub = request.PrivPub
                };
                this.context.AddLab.Add(addlab);
                var success = await this.context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}