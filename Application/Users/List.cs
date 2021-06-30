using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;

namespace Application.Users
{
    public class List
    {
        public class Query : IRequest<List<User>> { }
        public class Handler : IRequestHandler<Query, List<User>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<User>> Handle(Query request, CancellationToken cancellationToken)
            {
                var users = await this.context.User.ToListAsync();

                return users;
            }
        }
    }
}