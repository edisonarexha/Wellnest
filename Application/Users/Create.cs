using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Users

{
    public class Create
    {
        public class Command : IRequest
        {       
         public int Id{get;set;}
        public string name{get;set;}
        public string surname {get; set;}
        public string email {get; set;}
        public int userkey {get; set;}
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
                var users = new User{
                    Id = request.Id,
                    name = request.name,
                    surname = request.surname,
                    email = request.email,
                    userkey=request.userkey
                };
                this.context.User.Add(users);
                var success = await this.context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}