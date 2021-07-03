using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.AddLabs
{
    public class List
    {
        public class Query : IRequest<List<AddLab>> { }
        public class Handler : IRequestHandler<Query, List<AddLab>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<AddLab>> Handle(Query request, CancellationToken cancellationToken)
            {
                var addlab = await this._context.AddLab.ToListAsync();

                return addlab;
            }
        }
    }
}