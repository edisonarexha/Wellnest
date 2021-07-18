using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.CovidStatuses
{
    public class List
    {
        public class Query : IRequest<List<CovidStatus>> { }
        public class Handler : IRequestHandler<Query, List<CovidStatus>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<CovidStatus>> Handle(Query request, CancellationToken cancellationToken)
            {
                var covidStatus = await this._context.CovidStatus.ToListAsync();

                return covidStatus;
            }
        }
    }
}