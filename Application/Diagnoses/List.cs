using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Diagnoses
{
    public class List
    {
        public class Query : IRequest<List<Diagnose>> { }
        public class Handler : IRequestHandler<Query, List<Diagnose>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Diagnose>> Handle(Query request, CancellationToken cancellationToken)
            {
                var diagnose = await this._context.Diagnose.ToListAsync();

                return diagnose;
            }
        }
    }
}