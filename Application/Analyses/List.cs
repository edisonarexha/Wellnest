using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Analyses
{
    public class List
    {
        public class Query : IRequest<List<Analysis>> { }
        public class Handler : IRequestHandler<Query, List<Analysis>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Analysis>> Handle(Query request, CancellationToken cancellationToken)
            {
                var analysis = await this._context.Analysis.ToListAsync();

                return analysis;
            }
        }
    }
}