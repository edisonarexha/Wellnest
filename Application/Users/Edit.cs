using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Users
{
    public class Edit
    {
        public class Command : IRequest
        {
         public int Id{get;set;}
        public string name{get;set;}
        public string surname {get; set;}
        public string email {get; set;}
        public int? userkey {get; set;}
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
                var users = await this.context.User.FindAsync(request.Id);
                if (users == null)
                    throw new Exception("Could not find any user");
                
                users.name = request.name ?? users.name;
                users.surname = request.surname ?? users.surname;
                users.email = request.email ?? users.email;
                users.userkey=request.userkey ?? users.userkey;
                
                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}